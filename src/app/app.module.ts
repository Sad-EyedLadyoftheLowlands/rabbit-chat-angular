// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// PRIME NG
import { DialogService } from 'primeng/dynamicdialog';

// RABBIT MQ
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';

// RABBIT
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { MessageService } from './services/message.service';
import { DataService } from './services/data.service';
import { MenuComponent } from './components/menu/menu.component';
import { TestComponent } from './components/menu/test/test.component';
import { RabbitMqService } from './services/rabbit-mq.service';
import { AuditRxStompConfig } from './models/rabbit-mq/stomp.config';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        TestComponent,
        AuthComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
        // RABBIT
        HttpService,
        MessageService,
        RabbitMqService,
        DataService,
        AuthService,
        { provide: InjectableRxStompConfig, useValue: AuditRxStompConfig },
        { provide: RxStompService, deps: [ InjectableRxStompConfig ] },

        // PRIME NG
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
