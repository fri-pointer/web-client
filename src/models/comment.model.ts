import { BaseType } from "./base-type.model";

export class Comment extends BaseType {
    public parentId?: string;
    public text?: string;
}
