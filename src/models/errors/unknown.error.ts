import { BaseError } from "./base.error";

export class UnknownError extends BaseError {
    
    constructor() {
        super("Unknown error!", UnknownError);
    }
}
