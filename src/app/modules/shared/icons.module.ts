import { NgModule } from "@angular/core";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
    faCogs,
    faPencilAlt,
    faPlus,
    faSearch,
    faTimes
} from "@fortawesome/free-solid-svg-icons";

@NgModule({
    imports: [
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule
    ]
})
export class IconsModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(
            faPlus,
            faTimes,
            faCogs,
            faSearch,
            faPencilAlt
        );
    }
}
