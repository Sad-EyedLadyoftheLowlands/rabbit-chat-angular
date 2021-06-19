// ANGULAR
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

// PRIME NG
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

// RABBIT
import { FileComponent } from '../file/file.component';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    // EventEmitter for primary text.
    @Output() textInputChange = new EventEmitter<string>();

    /*
    EventEmitter for enter keyup to tell Room to send message.
    1 = success
    0 = failure
    This should set us up nicely for adding validation in the future.
     */
    @Output() enterKeyup = new EventEmitter<number>();

    /*
    EventEmitter for files to be uploaded coming from File.
     */
    @Output() uploadFiles = new EventEmitter<File[]>();

    // Definitions.
    public textInput: string = '';
    public messageMenuItems: MenuItem[] = [];

    constructor(private dialogService: DialogService) { }

    ngOnInit(): void { this.populateMessageMenuItems(); }

    /*
    Handles file upload prompt.
    Emits the files to upload from File.
     */
    private promptFileUpload(): void {
        const ref = this.dialogService.open(FileComponent, {
            header: 'File Upload',
            width: '65%' });
        ref.onClose.subscribe((files: File[]) => { this.uploadFiles.emit(files); });
    }

    private deleteAllText(): void { this.textInput = ''; }

    public showText(): void { console.log(this.textInput); }

    /*
    Emits the value of textInput through the textInputChange EventEmitter.
    TODO: Consider: why not use observables?
    TODO: This is only called when the DOM changes, not when the value is changed.
     */
    public onTextInputChange(text: string): void { this.textInputChange.emit(text); }

    /*
    Emits an int (1 or 0) for triggering Room to send message through enterKeyup EventEmitter.
    TODO: Number emitted to allow for validation. Add this.
     */
    public onEnterKeyup(event: any): void { this.enterKeyup.emit(1); this.clearText(); }

    /*
    This is a separate function because we will likely want to clear formatting as well as content.
     */
    public clearText(): void { this.textInput = ''; }

    /*
    Menu.
    Keep this at the bottom as it will always be long and spaced out.
     */
    private populateMessageMenuItems(): void {
        this.messageMenuItems = [
            {
                label: 'Font',
                items: [
                    {
                        label: 'Font Size',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'My Font'
                            },
                            {
                                label: 'Your Font'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Controls',
                items: [
                    {
                        label: 'Delete text',
                        command: () => this.deleteAllText()
                    }
                ]
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'Upload file(s)',
                        command: () => this.promptFileUpload()

                    }
                ]
            }
        ];
    }
}
