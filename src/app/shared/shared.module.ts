// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PRIMENG
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

// RABBIT
import { FileComponent } from '../components/room/file/file.component';
import { SubMenuDirective } from '../directives/sub-menu.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        // PRIME NG
        InputTextareaModule,
        ButtonModule,
        MenubarModule,
        TableModule,
        FileUploadModule,
        DynamicDialogModule
    ],
    declarations: [
        FileComponent,
        SubMenuDirective
    ],
    exports: [
        CommonModule,
        FormsModule,

        // PRIME NG
        InputTextareaModule,
        ButtonModule,
        MenubarModule,
        TableModule,
        FileUploadModule,
        DynamicDialogModule,
        SubMenuDirective
    ],
    providers: [],
    entryComponents: [
        FileComponent
    ]
})
export class SharedModule { }
