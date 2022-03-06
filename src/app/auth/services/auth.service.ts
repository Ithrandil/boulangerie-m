import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth) { }

  public login(credentials: {
    email: string;
    password: string;
  }): Observable<firebase.auth.UserCredential> {
    return from(
      this.auth
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(
          (res) => {
            return res;
          },
          (err) => {
            throw err;
          }
        )
    );
  }

  public logout(): void {
    this.auth.signOut();
  }

  public isUserAuthenticated(): Observable<firebase.User | null> {
    return this.auth.user;
  }
}
