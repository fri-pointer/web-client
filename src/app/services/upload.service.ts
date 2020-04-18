import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { API_URL } from "../injectables";
import { Observable, throwError } from "rxjs";
import { ForbiddenError, NotFoundError, UnknownError, UploadSignature, UploadSignatureRequest } from "../../models";
import { catchError, map, switchMap } from "rxjs/operators";
import { FORBIDDEN, NOT_FOUND } from "http-status-codes";

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
            map(res => res as UploadSignature)
        );
    }
    
    private uploadCallback(fileKey: string): Observable<void> {
        const signature = new UploadSignature();
        signature.key = fileKey;
        const url = `${this.apiUrl}/upload/callback`;
        return this.http.post(url, signature).pipe(
            map(res => res as null)
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
