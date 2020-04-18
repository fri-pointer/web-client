import { NgModule } from "@angular/core";
import { ToastaModule } from "ngx-toasta";
import { AlertModule } from "ngx-bootstrap/alert";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { PaginationModule } from "ngx-bootstrap/pagination";

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
