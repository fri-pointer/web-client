import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UniversityListPageComponent } from "./pages/universities/university-list-page/university-list-page.component";
import { UniversityDetailsPageComponent } from "./pages/universities/university-details-page/university-details-page.component";
import { UniversityResolver } from "../../services/resolvers/university.resolver";

const routes: Routes = [
    {path: "universities", component: UniversityListPageComponent},
    {
        path: "universities/:id", component: UniversityDetailsPageComponent, resolve: {
            university: UniversityResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoursesRoutingModule {
    
}
