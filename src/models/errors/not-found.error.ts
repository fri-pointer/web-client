import { BaseError } from "./base.error";

export class NotFoundError extends BaseError {
    
    constructor(message: string) {
        super(message, NotFoundError);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
