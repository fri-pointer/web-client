import { Component, Inject, OnInit } from "@angular/core";
import { AuthUser, KeycloakService } from "@procempa/ngx-keycloak";
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { API_URL } from "./factories";

@Component({
    selector: "fp-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    title = "web-client";
    
    isAuthenticated = false;
    user$: Observable<AuthUser>;
    
    constructor(private keycloak: KeycloakService,
                @Inject(API_URL) private apiUrl: string,
                private http: HttpClient) {
    }
    
    ngOnInit(): void {
        this.isAuthenticated = this.keycloak.authenticated();
        
        if (this.isAuthenticated) {
            this.user$ = this.keycloak.getUser();
            this.http.get(`${this.apiUrl}/test`).subscribe(
                res => console.log(res)
            );
        }
    }
    
    public login() {
        this.keycloak.login({redirectUri: window.location.origin});
    }
    
    public logout() {
        this.keycloak.logout(window.location.origin);
    }
}
