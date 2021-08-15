import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {SimpleSignInRequest} from '../../models/requests/simple-sign-in-request';
import {RabbitUser} from '../../models/rabbit-user';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    private username: string = 'firstuser';
    private password: string = 'demo';

    constructor(private httpService: HttpService) { }

    ngOnInit(): void { }

    public handleSignInRequest(): void {
        const simpleSignInRequest: SimpleSignInRequest = { username: this.username, password: this.password };
        this.httpService.postSimpleSignInRequest(simpleSignInRequest).subscribe((user: RabbitUser) => { console.log(user); });
    }
}
