// ANGULAR
import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Config } from '../config/env.config';
import {CreateMessageRequest} from '../models/requests/create-message-request';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) { }

    public getAllMessagesFromRoom(roomId: number): Observable<any> {
        return this.httpClient.get(`${Config.apiUrl}/message/${roomId}`);
    }

    public postMessageToRoom(createMessageRequest: CreateMessageRequest): Observable<any> {
        return this.httpClient.post(`${Config.apiUrl}/message`, createMessageRequest);
    }
}
