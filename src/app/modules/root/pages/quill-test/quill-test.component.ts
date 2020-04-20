import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ContentChange } from "ngx-quill";

@Component({
    selector: "fp-quill-test",
    templateUrl: "./quill-test.component.html",
    styleUrls: ["./quill-test.component.scss"]
})
export class QuillTestComponent implements OnInit {
    
    public formGroup: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {
    }
    
    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            text: this.formBuilder.control(""),
            plainText: this.formBuilder.control("")
        });
    }
    
    public submit() {
        console.log(this.formGroup.getRawValue());
    }
    
    public onContentChanged($event: ContentChange) {
        this.plainTextCtrl.setValue($event.text);
    }
    
    public get plainTextCtrl(): FormControl {
        return this.formGroup.controls.plainText as FormControl;
    }
}
