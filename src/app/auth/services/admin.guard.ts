import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { take } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router) { }
    canActivate(): boolean | Promise<boolean> {
        let isAuthenticated = false;
        this.authService.isUserAdmin().pipe(take(1)).subscribe({ next: (isAuth) => isAuthenticated = isAuth, error: () => isAuthenticated = false });
        if (!isAuthenticated) {
            this.router.navigate(['/']);
        }
        return isAuthenticated;
    }
}