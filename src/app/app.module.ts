// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// PRIME NG
import { DialogService } from 'primeng/dynamicdialog';

// RABBIT
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { MessageService } from './services/message.service';
import { MenuComponent } from './components/menu/menu.component';
import { TestComponent } from './components/menu/test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        TestComponent,
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

        // PRIME NG
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
