import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, ErrorHandler, NgModule } from "@angular/core";

import { KeycloakService } from "@procempa/ngx-keycloak";

import { AppComponent } from "./app.component";
import { RootModule } from "./modules/root/root.module";
import { AppConfigFactory } from "./factories";
import { ApiInterceptor } from "./services/interceptors/api.interceptor";
import { AppErrorHandler } from "./services/handlers/error.handler";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RootModule
    ],
    providers: [
        {provide: APP_INITIALIZER, useFactory: AppConfigFactory, multi: true, deps: [KeycloakService]},
        {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
        {provide: ErrorHandler, useClass: AppErrorHandler}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
