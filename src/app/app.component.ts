// ANGULAR
import { Component } from '@angular/core';

// RABBIT
import { RabbitMqService } from './services/rabbit-mq.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'rabbit-chat-angular';
    authenticated: boolean = false;

    /*
    We don't need to explicitly connect to RabbitMQ because this is handled in the
    constructor of RabbitMqService. Simply instantiating the service is enough to
    ensure that we are connected from the start of the app.
     */
    constructor(private rabbitMqService: RabbitMqService) { }
}
