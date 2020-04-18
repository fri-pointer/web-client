import { BaseType } from "./base-type.model";

export class Course extends BaseType {
    public name?: string;
    public abbreviation?: string;
    public year?: number;
    public owner?: string;
}
