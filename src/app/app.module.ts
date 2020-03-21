import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KeycloakService, NgxKeycloakModule } from "@procempa/ngx-keycloak";
import { AppConfigFactory } from "./factories";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxKeycloakModule.forRoot()
    ],
    providers: [
        {provide: APP_INITIALIZER, useFactory: AppConfigFactory, multi: true, deps: [KeycloakService]},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
