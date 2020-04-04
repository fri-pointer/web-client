import { University } from "../../../models";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UniversityService } from "../university.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UniversityResolver implements Resolve<University> {
    
    constructor(private universityService: UniversityService) {
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<University> | Promise<University> | University {
        const universityId = route.paramMap.get("id");
        return this.universityService.getUniversity(universityId);
    }
    
}
