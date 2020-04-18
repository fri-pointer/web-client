import { BaseType } from "./base-type.model";
import { StudentProgram } from "./student-program.model";

export class Faculty extends BaseType {
    public name?: string;
    public abbreviation?: string;
    public description?: string;
    public location?: string;
    public studentPrograms?: StudentProgram[];
}
