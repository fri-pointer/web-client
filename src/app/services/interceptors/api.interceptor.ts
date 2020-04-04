import { Inject, Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { APPLICATION_ID } from "../../injectables";

@Injectable({
    providedIn: "root"
})
export class ApiInterceptor implements HttpInterceptor {
    
    constructor(@Inject(APPLICATION_ID) private appId: string) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.isBlackListed(req.url)) {
            return next.handle(req);
        }
        
        const headers = req.headers
            .set("Content-Type", "application/json")
            .set("X-Caller-Id", this.appId);
        
        return next.handle(req.clone({
            headers
        }));
    }
    
    private isBlackListed(url: string): boolean {
        if (url.includes("s3-accelerate.amazonaws.com")) {
            return true;
        }
        
        return false;
    }
    
}
