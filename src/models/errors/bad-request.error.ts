import { BaseError } from "./base.error";

export class BadRequestError extends BaseError {
    
    constructor(message: string) {
        super(message, BadRequestError);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
