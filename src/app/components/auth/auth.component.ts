// ANGULAR
import { Component, OnInit } from '@angular/core';

// RABBIT CHAT
import {HttpService} from '../../services/http.service';
import {SimpleSignInRequest} from '../../models/requests/simple-sign-in-request';
import {RabbitUser} from '../../models/rabbit-user';
import {DataService} from '../../services/data.service';

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
                private dataService: DataService) { }

    ngOnInit(): void { }

    public handleSignInRequest(): void {
        const simpleSignInRequest: SimpleSignInRequest = { username: this.username, password: this.password };

        this.httpService.postSimpleSignInRequest(simpleSignInRequest).subscribe((user: RabbitUser) => {
            console.log(user);
            this.dataService.setObject('AUTHUSER', user);

            const test: RabbitUser = this.dataService.getObject('AUTHUSER');
            console.log(test);

            this.dataService.setBoolean('AUTHENTICATED', true);

            const authTest: boolean = this.dataService.getBoolean('AUTHENTICATED');
            console.log(authTest);
        });
    }

    public test(): void {
        const test: boolean = this.dataService.getBoolean('AUTHENTICATED');
        console.log(test);
    }
}
