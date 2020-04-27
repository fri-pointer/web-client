import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SetupPageComponent } from "./pages/setup-page/setup-page.component";

const routes: Routes = [
    {path: "", pathMatch: "full", component: SetupPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SetupRoutingModule {
    
}
