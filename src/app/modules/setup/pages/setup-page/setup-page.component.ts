import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "fp-setup-page",
    templateUrl: "./setup-page.component.html",
    styleUrls: ["./setup-page.component.scss"]
})
export class SetupPageComponent implements OnInit {
    
    public formGroup: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {
    }
    
    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            universityId: this.formBuilder.control(""),
            facultyId: this.formBuilder.control("")
        });
    }
    
}
