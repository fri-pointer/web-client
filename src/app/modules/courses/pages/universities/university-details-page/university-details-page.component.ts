import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "fp-university-details-page",
    templateUrl: "./university-details-page.component.html",
    styleUrls: ["./university-details-page.component.scss"]
})
export class UniversityDetailsPageComponent implements OnInit {
    
    constructor(private route: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        console.log(this.route.data);
    }
    
}
