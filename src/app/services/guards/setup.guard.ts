import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthUser, KeycloakService } from "@procempa/ngx-keycloak";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class SetupGuard implements CanActivate {
    
    constructor(private keycloakService: KeycloakService,
                private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.keycloakService.authenticated()) {
            return this.keycloakService.getUser().pipe(
                map((user: AuthUser) => {
                    // if setupCompleted attribute is present and true, let user through,
                    // otherwise, redirect to setup page
                    const setupCompleted = user.attributes.setupCompleted;
                    if (setupCompleted) {
                        return true;
                    }
                    this.router.navigate(["/setup"]);
                    return false;
                }));
        }
        // If anon access, let through - auth is handled in separate guard
        return true;
    }
    
}
