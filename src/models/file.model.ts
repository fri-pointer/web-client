import { BaseType } from "./base-type.model";

export class File extends BaseType {
    public name: string;
    public location: string;
    public mimeType: string;
    public fileExtension: string;
    public uploaded: boolean;
}
