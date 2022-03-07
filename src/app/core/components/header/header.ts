import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  constructor(
    public router: Router,
    public authService: AuthService,
  ) { }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
