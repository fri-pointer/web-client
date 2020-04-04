import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../injectables";
import { Observable } from "rxjs";
import { UploadSignature } from "../../models";
import { map, switchMap } from "rxjs/operators";
import { UploadSignatureRequest } from "../../models/upload-signature.model";

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
    
    public uploadFile(file: File): Observable<any> {
        return this.getSignature(file).pipe(
            switchMap((uploadSignature: UploadSignature) => {
                return this.http.put(uploadSignature.url, file, {
                    headers: uploadSignature.requiredHeaders
                });
            })
        );
    }
    
}
