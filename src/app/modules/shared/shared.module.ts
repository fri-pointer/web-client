import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BootstrapModule } from "./bootstrap.module";
import { IconsModule } from "./icons.module";
import { AuthOnlyDirective } from "./directives/auth-only.directive";


@NgModule({
    declarations: [
        AuthOnlyDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        BootstrapModule,
        IconsModule
    ],
    exports: [
        BootstrapModule,
        IconsModule,
        AuthOnlyDirective
    ]
})
export class SharedModule {
    
}
