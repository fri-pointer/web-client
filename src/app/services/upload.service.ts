import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { API_URL } from "../injectables";
import { Observable, of, throwError } from "rxjs";
import { ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError, UnknownError, UploadSignature, UploadSignatureRequest } from "../../models";
import { catchError, map, switchMap } from "rxjs/operators";
import { FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED } from "http-status-codes";

@Injectable({
    providedIn: "root"
})
export class UploadService {
    
    constructor(private http: HttpClient,
                @Inject(API_URL) private apiUrl: string) {
    }
    
    public getSignature(file: File): Observable<UploadSignature> {
        const signatureRequest = UploadSignatureRequest.from(file);
        const url = `${this.apiUrl}/upload/signature`;
        return this.http.post(url, signatureRequest).pipe(
            map(res => res as UploadSignature),
            catchError((err: HttpErrorResponse) => {
                if (err.status === UNAUTHORIZED) {
                    return throwError(new UnauthorizedError("Unauthorized!"));
                } else if (err.status === INTERNAL_SERVER_ERROR) {
                    return throwError(new InternalServerError("Server error!"));
                }
                return throwError(new UnknownError());
            })
        );
    }
    
    private uploadCallback(fileKey: string): Observable<void> {
        const signature = new UploadSignature();
        signature.key = fileKey;
        const url = `${this.apiUrl}/upload/callback`;
        return this.http.post(url, signature).pipe(
            map(res => res as null),
            // Always successfully complete
            catchError(() => of(null))
        );
    }
    
    public uploadFile(file: File): Observable<void> {
        return this.getSignature(file).pipe(
            switchMap((uploadSignature: UploadSignature) => {
                return this.http.put(uploadSignature.url, file, {
                    headers: uploadSignature.requiredHeaders
                }).pipe(
                    switchMap(() => {
                        return this.uploadCallback(uploadSignature.key);
                    }),
                    catchError((err: HttpErrorResponse) => {
                        if (err.status === FORBIDDEN) {
                            return throwError(new ForbiddenError("Invalid signature url!"));
                        } else if (err.status === NOT_FOUND) {
                            return throwError(new NotFoundError("Invalid signature url!"));
                        }
                        return throwError(new UnknownError());
                    })
                );
            })
        );
    }
    
}
