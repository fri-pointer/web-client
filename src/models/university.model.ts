import { BaseType } from "./base-type.model";
import { Faculty } from "./faculty.model";

export class University extends BaseType {
    public location: string;
    public name: string;
    public faculties?: Faculty[];
}
