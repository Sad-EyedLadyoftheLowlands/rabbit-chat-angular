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
    private binding: string = '/exchange/RabbitChat';

    public currentMessage = this.messageSource.asObservable();

    constructor(private rxStompService: RxStompService, private rxStompConfig: InjectableRxStompConfig) {
        this.finishConfiguration();
    }

    /*
    Queue name is dynamically generated.
    TODO: Consider making the username part of the queue name for ease of identification.
     */
    private finishConfiguration(): void {
        this.mqQueueName = `rabbit-chat-client-${this.getUniqueIdentifier()}`;
        this.subscriptionHeaders = { id: 'angular', 'x-queue-name': this.mqQueueName };
        this.connect();
    }

    /*
    Primary method to connect to the RabbitMq server.
     */
    private connect(): void {
        console.log('Attempting to connect to RabbitMq with config: ' + JSON.stringify(this.rxStompConfig));

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

    private dispatchMessage(message: any): void {
        console.log('Dispatching message: ' + JSON.stringify(message));

        this.messageSource.next(message);
    }

    private getUniqueIdentifier(): number { return Math.floor(Math.random() * 1000); }
}
