import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '@models/user';
import { Observable, switchMap, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RecapMensuelService {

    constructor(private firestore: AngularFirestore, public auth: AngularFireAuth) {
    }

    public getAllUsers(): Observable<User[]> {
        return this.firestore
            // , (ref) => ref.orderBy('name')
            .collection<User>('users')
            .valueChanges({ idField: 'userId' });
    }

    //  FIXME: ENLEVER UNE FOIS VRAI IMPLEM GETALLUSERS
    public getOneUser(): Observable<User> {
        return this.auth.user.pipe(
            take(1),
            switchMap(user => { return this.firestore.doc(`users/${user?.uid}`).valueChanges() as Observable<User> }
            )
        )
    }
}
