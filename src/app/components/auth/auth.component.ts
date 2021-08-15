// ANGULAR
import { Component, OnInit } from '@angular/core';

// RABBIT CHAT
import {HttpService} from '../../services/http.service';
import {SimpleSignInRequest} from '../../models/requests/simple-sign-in-request';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
/*
How much of this should be moved into an AuthService?
 */
export class AuthComponent implements OnInit {
    /*
    Hardcoded for testing purposes.
     */
    private username: string = 'firstuser';
    private password: string = 'demo';

    constructor(private httpService: HttpService,
                private dataService: DataService,
                private authService: AuthService) { }

    ngOnInit(): void { }

    public handleSignInRequest(): void {
        const simpleSignInRequest: SimpleSignInRequest = { username: this.username, password: this.password };

        this.authService.signIn(simpleSignInRequest);
    }

    public test(): void {
        const test: boolean = this.dataService.getBoolean('AUTHENTICATED');
        console.log(test);
    }
}
