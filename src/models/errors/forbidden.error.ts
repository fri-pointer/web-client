import { BaseError } from "./base.error";

export class ForbiddenError extends BaseError {
    
    constructor(message: string) {
        super(message, ForbiddenError);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
