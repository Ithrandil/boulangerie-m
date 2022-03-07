import { Component } from '@angular/core';
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
    public authService: AuthService,
  ) {
    this.authService
      .isUserAuthenticated()
      .pipe(
        tap((user) => {
          this.isConnected = user;
        })
      )
      .subscribe();
    // FIXME: ca servait à l'affichage dynamique du menu entre autre. A déplacer
  }
}
