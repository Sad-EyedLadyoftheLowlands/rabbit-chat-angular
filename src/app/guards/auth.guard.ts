// ANGULAR
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

// RABBIT
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private dataService: DataService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        const authenticated = this.dataService.getBoolean('AUTHENTICATED');
        console.log(authenticated);

        if (authenticated) { return true; }

        this.router.navigate(['/auth']);
        return false;
    }
}
