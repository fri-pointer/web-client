import { NgModule } from "@angular/core";
import { ToastaModule } from "ngx-toasta";
import {
    AlertModule,
    ModalModule, PaginationModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule
} from "ngx-bootstrap";

@NgModule({
    imports: [
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        TimepickerModule.forRoot(),
        ToastaModule.forRoot(),
        TypeaheadModule.forRoot(),
        PaginationModule.forRoot()
    ],
    exports: [
        TooltipModule,
        ModalModule,
        AlertModule,
        TimepickerModule,
        ToastaModule,
        TypeaheadModule,
        PaginationModule
    ]
})
export class BootstrapModule {

}
