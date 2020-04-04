import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { API_URL } from "../injectables";
import { Observable, throwError } from "rxjs";
import { EntityList, NotFoundError, University, UnknownError } from "../../models";
import { catchError, map } from "rxjs/operators";
import { X_TOTAL_COUNT } from "../config/http-headers";

@Injectable({
    providedIn: "root"
})
export class UniversityService {
    
    constructor(private http: HttpClient,
                @Inject(API_URL) private apiUrl: string) {
    }
    
    public getUniversities(): Observable<EntityList<University>> {
        const url = `${this.apiUrl}/universities`;
        return this.http.get(url, {observe: "response"}).pipe(
            map((res: HttpResponse<University[]>) => {
                return new EntityList<University>(
                    res.body,
                    parseInt(res.headers.get(X_TOTAL_COUNT), 10)
                );
            })
        );
    }
    
    /**
     * Retrieves details of university
     * @param universityId university id
     * @throws {NotFoundError} on 404 status
     */
    public getUniversity(universityId: string): Observable<University> {
        const url = `${this.apiUrl}/universities/${universityId}`;
        return this.http.get(url).pipe(
            map(res => res as University),
            catchError((err: HttpErrorResponse) => {
                if (err.status === 404) {
                    return throwError(new NotFoundError("University not found!"));
                }
                return throwError(new UnknownError());
            })
        );
    }
}
