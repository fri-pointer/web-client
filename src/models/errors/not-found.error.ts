import { BaseError } from "./base.error";

export class NotFoundError extends BaseError {
    
    constructor(message: string) {
        super(message, NotFoundError);
        // this.type = NotFoundError;
        // Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
