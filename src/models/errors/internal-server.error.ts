import { BaseError } from "./base.error";

export class InternalServerError extends BaseError {
    
    constructor(message: string) {
        super(message, InternalServerError);
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    
}
