// ANGULAR
import { NgModule } from '@angular/core';

// RABBIT
import {RoomRoutingModule} from './room.routing.module';
import {RoomComponent} from './room.component';
import {SharedModule} from '../../shared/shared.module';
import {MessageComponent} from './message/message.component';

@NgModule({
    imports: [RoomRoutingModule, SharedModule],
    declarations: [RoomComponent, MessageComponent],
    // providers: [MessageComponent],
})

export class RoomModule { }
