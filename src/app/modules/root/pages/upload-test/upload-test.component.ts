import { Component, OnInit } from "@angular/core";
import { UploadService } from "../../../../services/upload.service";
import { BaseError, NotFoundError } from "../../../../../models";

@Component({
    selector: "fp-upload-test",
    templateUrl: "./upload-test.component.html",
    styleUrls: ["./upload-test.component.scss"]
})
export class UploadTestComponent implements OnInit {
    
    private file: File = null;
    
    constructor(private uploadService: UploadService) {
    }
    
    ngOnInit(): void {
    }
    
    public onFileSelection(files: FileList) {
        this.file = files.item(0);
    }
    
    public submit() {
        
        this.uploadService.uploadFile(this.file).subscribe(
            (res) => {
                console.log("Uploaded! ", res);
            },
            (err: BaseError) => {
                console.error(err);
                if (err instanceof NotFoundError) {
                    
                }
            }
        );
    }
    
}
