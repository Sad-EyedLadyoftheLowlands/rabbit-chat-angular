// ANGULAR
import {Injectable} from '@angular/core';

// OTHER
import {BehaviorSubject, Observable} from 'rxjs';

// RABBIT CHAT
import {RabbitUser} from '../models/rabbit-user';
import {SimpleSignInRequest} from '../models/requests/simple-sign-in-request';
import {DataService} from './data.service';
import {HttpService} from './http.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    public authenticated = new BehaviorSubject(false);
    public authenticatedObservable = this.authenticated.asObservable();

    constructor(private httpService: HttpService,
                private dataService: DataService,
                private router: Router) { this.populateAuthenticatedBoolean(); }

    private populateAuthenticatedBoolean(): void {
        const authenticated: boolean = this.dataService.getBoolean('AUTHENTICATED');

        if (authenticated !== null) { this.authenticated.next(authenticated); }
    }

    public signIn(simpleSignInRequest: SimpleSignInRequest): void {
        this.httpService.postSimpleSignInRequest(simpleSignInRequest).subscribe((user: RabbitUser) => {
            console.log(user);
            this.dataService.setObject('AUTHUSER', user);

            const test: RabbitUser = this.dataService.getObject('AUTHUSER');
            console.log(test);

            this.dataService.setBoolean('AUTHENTICATED', true);

            const authTest: boolean = this.dataService.getBoolean('AUTHENTICATED');
            console.log(authTest);

            this.authenticated.next(true);

            this.router.navigateByUrl('/room');
        });
    }

}
