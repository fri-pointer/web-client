import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { KeycloakService } from "@procempa/ngx-keycloak";

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: "[authOnly]"
})
export class AuthOnlyDirective {
    
    private shown = false;
    
    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private keycloak: KeycloakService) {
    }
    
    @Input("authOnly")
    set kcAuthOnly(showForAuthenticated: boolean) {
        if (this.keycloak.authenticated() && showForAuthenticated) {
            this.setVisibility(true);
        } else if (!this.keycloak.authenticated() && !showForAuthenticated) {
            this.setVisibility(true);
        } else {
            this.setVisibility(false);
        }
    }
    
    private setVisibility(show: boolean) {
        if (!show && this.shown) {
            this.viewContainer.clear();
            this.shown = false;
        } else if (show && !this.shown) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.shown = true;
        }
    }
}
