// ANGULAR
import { Component, OnInit } from '@angular/core';

// PRIME NG
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

    // Definitions.
    public uploadedFiles: File[] = [];

    constructor(public ref: DynamicDialogRef) { }

    ngOnInit(): void { }

    public onUpload(event: any): void {
        for (const file of event.files) { this.uploadedFiles.push(file); }
        this.ref.close(this.uploadedFiles);
    }
}
