import { ErrorHandler, Injectable } from "@angular/core";
import { BaseError, NotFoundError } from "../../../models";

@Injectable({
    providedIn: "root"
})
export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        if (error instanceof BaseError) {
            console.error("Base error: ", error.type);
        } else if (error instanceof NotFoundError) {
            console.error("Not found error: ", error.type);
        } else {
            console.error("Unknown error", error);
        }
    }
}
