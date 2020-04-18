import { BaseType } from "./base-type.model";
import { Course } from "./course.model";

export class StudentProgram extends BaseType {
    public name?: string;
    public abbreviation?: string;
    public description?: string;
    public courses?: Course[];
}
