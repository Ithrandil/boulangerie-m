import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isConnected!: firebase.User | null;
  public activatedRoute = '';
  constructor(public router: Router, public authService: AuthService) {
    this.authService
      .isUserAuthenticated()
      .pipe(
        tap((user) => {
          this.isConnected = user;
        })
      )
      .subscribe();
    console.log(this.router.routerState.snapshot.url);
  }
  public logoutAdminSpace(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
  public onActivate(): void {
    this.activatedRoute = this.router.routerState.snapshot.url;
  }
}
