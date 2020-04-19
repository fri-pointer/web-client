import { BaseError } from "./base.error";

export class UnauthorizedError extends BaseError {
    
    constructor(message: string) {
        super(message, UnauthorizedError);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
