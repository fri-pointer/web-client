export class UploadSignature {
    public expires: Date;
    public url: string;
    public key: string;
    public requiredHeaders: { [headerName: string]: string };
}

export class UploadSignatureRequest {
    public filename: string;
    public contentType: string;
    
    public static from(file: File): UploadSignatureRequest {
        const request = new UploadSignatureRequest();
        request.filename = file.name;
        request.contentType = file.type;
        return request;
    }
}
