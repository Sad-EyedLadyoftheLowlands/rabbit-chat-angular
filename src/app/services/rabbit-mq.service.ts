// ANGULAR
import {Injectable} from '@angular/core';

// RXJS
import {BehaviorSubject, Subscription} from 'rxjs';

// RABBITMQ
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { Message, StompHeaders } from '@stomp/stompjs';

@Injectable()
export class RabbitMqService {
    private topicSubscription: Subscription | undefined;
    private mqQueueName: string | undefined;
    private subscriptionHeaders: StompHeaders | undefined;

    private messageSource = new BehaviorSubject({});
    private binding: string = '/exchange/JmdExchange/renai.*';
    // private mqUrl: string = 'ws://localhost:15674/ws';

    public currentMessage = this.messageSource.asObservable();

    constructor(private rxStompService: RxStompService, private rxStompConfig: InjectableRxStompConfig) {
        this.finishConfiguration();
    }

    private finishConfiguration(): void {
        this.mqQueueName = `rabbit-chat-client-${this.getUniqueId(2)}`;
        this.subscriptionHeaders = { id: 'angular', 'x-queue-name': this.mqQueueName };
        this.connect();
    }

    /*
    Primary method to connect to the RabbitMq server.
    TODO: Public? Just call connect in the constructor?
     */
    private connect(): void {
        console.log('Attempting to connect to RabbitMq');

        this.rxStompService.configure(this.rxStompConfig);

        /*
        Not clear that this is necessary, but it seems like a good practice to ensure that the connection,
        not the subscription, is active.
         */
        if (!this.rxStompService.active) { this.rxStompService.activate(); }

        this.topicSubscription = this.rxStompService
            .watch(this.binding, this.subscriptionHeaders)
            .subscribe((message: Message) => { this.dispatchMessage(JSON.parse(message.body)); });
    }

    private dispatchMessage(message: any): void { this.messageSource.next(message); }

    /*
    Copied from Audit Mobile.
    TODO: Check the book for the standard way to do this. There is a decent answer in the std lib.
     */
    private getUniqueId(parts: number): string {
        const stringArr = [];
        for (let i = 0; i < parts; i++) {
            // tslint:disable-next-line:no-bitwise
            const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            stringArr.push(S4);
        }
        return stringArr.join('-');
    }



}
