// ANGULAR
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

// RXJS
import {Subscription} from 'rxjs';

// RABBIT
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { CreateMessageRequest } from '../../models/requests/create-message-request';
import { RabbitMqService } from '../../services/rabbit-mq.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    private rabbitMqSubscription: Subscription | undefined;
    private userId: number = 1;
    private roomId: number = 4;
    public textInput: string = '';
    public messages: Message[] = [];

    constructor(private httpService: HttpService,
                private messageService: MessageService,
                private rabbitMqService: RabbitMqService) { }

    ngOnInit(): void {
        this.populateMessages();
        this.handleSubscriptions();
    }

    /*
    Primary method for getting all messages.
    TODO: Many filters to implement.
     */
    private populateMessages(): void { this.httpService.getAllMessagesFromRoom(this.roomId)
        .subscribe((messages: Message[]) => this.messages = messages); }

    public logMessages(): void { console.log(this.messages); }

    private handleSubscriptions(): void {
        this.rabbitMqSubscription = this.rabbitMqService.currentMessage.subscribe((message: any) => {
            if (message.Type === 0) {
                console.log ('Mq message type 0 => calling populateMessages');

                this.populateMessages();
            }
        });
    }

    /*
    Event handler for file upload from File in Message.
     */
    public onFileUpload(files: File[]): void { console.log(files.length); }

    /*
    Event handler for text changing in Message.
     */
    public onTextInputChange(text: string): void { this.textInput = text; }

    /*
    Event handler for sending messages from Message on Enter key.
     */
    public onMessageEnterKeyup(keyupCode: number): void {
        const createMessageRequest: CreateMessageRequest =
            this.messageService.createCreateMessageRequest(this.userId, this.roomId, this.textInput);
        this.httpService.postMessageToRoom(createMessageRequest).subscribe((res: boolean) => this.populateMessages());
    }
}
