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
    title = 'rabbit-chat-angular';

    constructor(private rabbitMqService: RabbitMqService) { }
}
