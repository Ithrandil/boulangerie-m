import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(): Observable<boolean> {
        return this.authService.isUserAdmin().pipe(map(isAuth => isAuth));
    }
}