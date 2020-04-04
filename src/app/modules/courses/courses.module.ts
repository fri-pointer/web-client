import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesRoutingModule } from "./courses-routing.module";
import { UniversityListPageComponent } from "./pages/universities/university-list-page/university-list-page.component";
import { UniversityDetailsPageComponent } from "./pages/universities/university-details-page/university-details-page.component";


@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule
    ],
    declarations: [
        UniversityListPageComponent,
        UniversityDetailsPageComponent
    ]
})
export class CoursesModule {
    
}
