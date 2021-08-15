// ANGULAR
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Config } from '../config/env.config';
import {CreateMessageRequest} from '../models/requests/create-message-request';
import {SimpleSignInRequest} from '../models/requests/simple-sign-in-request';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) { }

    public getAllMessagesFromRoom(roomId: number): Observable<any> {
        return this.httpClient.get(`${Config.apiUrl}/message/${roomId}`);
    }

    public postMessageToRoom(createMessageRequest: CreateMessageRequest): Observable<any> {
        return this.httpClient.post(`${Config.apiUrl}/message`, createMessageRequest);
    }

    public postSimpleSignInRequest(simpleSignInRequest: SimpleSignInRequest): Observable<any> {
        return this.httpClient.put(`${Config.apiUrl}/auth`, simpleSignInRequest);
    }
}
