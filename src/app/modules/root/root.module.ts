import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RootRoutingModule } from "./root-routing.module";
import { Error404PageComponent } from "./pages/error404-page/error404-page.component";
import { LayoutComponent } from "./layout/layout.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxKeycloakModule } from "@procempa/ngx-keycloak";
import { UploadTestComponent } from "./pages/upload-test/upload-test.component";

@NgModule({
    declarations: [
        Error404PageComponent,
        LayoutComponent,
        LandingPageComponent,
        UploadTestComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxKeycloakModule.forRoot(),
        RootRoutingModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class RootModule {
}
