// ANGULAR
import {Injectable} from '@angular/core';

// RABBIT
import {CreateMessageRequest} from '../models/requests/create-message-request';

@Injectable()
export class MessageService {

    constructor() { }

    public createCreateMessageRequest(sendingUserId: number, roomId: number, content: string): CreateMessageRequest {
        return { sendingUserId, roomId, content };
    }

}
