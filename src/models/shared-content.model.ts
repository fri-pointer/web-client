import { BaseType } from "./base-type.model";
import { File } from "./file.model";

export class SharedContent extends BaseType {
    public title: string;
    public description: string;
    public version: number;
    public file: File;
}
