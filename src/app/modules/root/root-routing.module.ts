import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { Error404PageComponent } from "./pages/error404-page/error404-page.component";
import { UploadTestComponent } from "./pages/upload-test/upload-test.component";
import { QuillTestComponent } from "./pages/quill-test/quill-test.component";

const routes: Routes = [
    {
        path: "", component: LayoutComponent, children: [
            {path: "", pathMatch: "full", component: LandingPageComponent},
            {path: "upload", component: UploadTestComponent},
            {path: "quill", component: QuillTestComponent},
            {path: "", loadChildren: () => import("../courses/courses.module").then(m => m.CoursesModule)},
            {path: "404", component: Error404PageComponent}
        ]
    },
    {path: "**", redirectTo: "/404"}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RootRoutingModule {
    
}
