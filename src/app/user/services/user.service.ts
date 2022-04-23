import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, switchMap, take } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '@models/user';
import { Order } from '@models/order';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  public getFirebaseUser(): Observable<firebase.User | null> {
    return this.auth.user;
  }

  public getUserInfos(): Observable<User> {
    return this.auth.user.pipe(
      take(1),
      switchMap(user => { return this.firestore.doc(`users/${user?.uid}`).valueChanges() as Observable<User> }
      )
    )
  }

  getUserOrders(firebaseUid: string): Observable<Order[]> {
    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref
          .where('firebaseUid', '==', firebaseUid)
      )
      .valueChanges({ idField: 'orderId' });
  }

  public updateUserInformations(user: User, firebaseUid: string | undefined): Observable<any> {
    return from(this.firestore.doc(`users/${firebaseUid}`).update(user));
  }

  public deleteDeliveryAddress(firebaseUid: string | undefined): Observable<any> {
    return from(this.firestore.doc(`users/${firebaseUid}`).update({
      deliveryAddress: firebase.firestore.FieldValue.delete()
    }));
  }

}
