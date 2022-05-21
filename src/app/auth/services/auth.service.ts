import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '@models/user';
import firebase from 'firebase/compat/app';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<User>;

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection<User>('users');

  }

  public register(credentials: User): Observable<any> {
    return from(
      this.auth.createUserWithEmailAndPassword(credentials.email, credentials.password as string)
        .then((result) => {
          result.user?.sendEmailVerification();
          return result.user;
        })
        .catch((error) => {
          window.alert(error.message);
        })
    ).pipe(
      switchMap((user) => {
        const newUser: User = {
          firebaseUid: user?.uid,
          name: credentials.name,
          phone: credentials.phone,
          address: credentials.address,
          email: credentials.email
        }
        return this.saveUserAtRegistration(newUser);
      })
    );
  }

  private saveUserAtRegistration(user: User): Observable<any> {
    return from(this.userCollection.doc(user.firebaseUid).set(user));
  }

  public login(credentials: {
    email: string;
    password: string;
  }): Observable<firebase.auth.UserCredential> {
    return from(
      this.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
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

  public resetUserPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email)
      .then((res) => {
        return res;
      },
        (err) => {
          throw err;
        })
    )
  }

  // public updateUserPassword(currentPassword: string, newPassword: string) {
  //   const cpUser = firebase.auth().currentUser;
  //   const credentials = firebase.auth.EmailAuthProvider.credential(
  //     cpUser?.email as string, currentPassword);

  //   return cpUser?.reauthenticateWithCredential(credentials).then(
  //     res => {
  //       console.log("relogin du user", res)
  //       // const reloggedUser = firebase.auth().currentUser;
  //       cpUser?.updatePassword(newPassword).then(e => console.log("FINITO", e))
  //         .catch(err => console.log("erreur dans le update pwd", err))
  //     }
  //   )
  //     .catch(error => { throw error });
  // }
}
