import { Component } from '@angular/core';
// FIXME: remove after full fontawesome implementation
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { tap } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isConnected!: firebase.User | null;
  public activatedRoute = '';
  constructor(
    public router: Router,
    public authService: AuthService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.authService
      .isUserAuthenticated()
      .pipe(
        tap((user) => {
          this.isConnected = user;
        })
      )
      .subscribe();
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logos/facebook-circular-logo.svg'
      )
    );
  }
  public logoutAdminSpace(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
  public onActivate(): void {
    this.activatedRoute = this.router.routerState.snapshot.url;
  }
}
