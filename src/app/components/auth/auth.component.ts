// ANGULAR
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    private username: string = 'firstuser';
    private password: string = 'demo';
     */

    public loginForm: FormGroup;

    constructor(private httpService: HttpService,
                private formBuilder: FormBuilder,
                private dataService: DataService,
                private authService: AuthService) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void { }

    public handleSignInRequest(): void {
        const simpleSignInRequest: SimpleSignInRequest = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        };

        this.authService.signIn(simpleSignInRequest);
    }

    public test(): void {
        const test: boolean = this.dataService.getBoolean('AUTHENTICATED');
        console.log(test);
    }
}
