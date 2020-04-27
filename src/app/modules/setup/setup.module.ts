import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SetupRoutingModule } from "./setup-routing.module";
import { SetupPageComponent } from "./pages/setup-page/setup-page.component";


@NgModule({
    imports: [
        CommonModule,
        SetupRoutingModule
    ],
    declarations: [
        SetupPageComponent
    ]
})
export class SetupModule {
    
}
