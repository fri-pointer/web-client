import { BaseType } from "./base-type.model";
import { Answer } from "./answer.model";

export class Question extends BaseType {
    public title?: string;
    public content?: string;
    public answers?: Answer[];
}
