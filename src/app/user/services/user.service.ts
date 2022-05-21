import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Order } from '@models/order';
import { User } from '@models/user';
import firebase from 'firebase/compat/app';
import { from, Observable, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private ordersCollection: AngularFirestoreCollection<Order>;

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.ordersCollection = firestore.collection<Order>('orders');
  }

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

  public updateUserInformations(user: User, firebaseUid: string | undefined): Observable<any> {
    return from(this.firestore.doc(`users/${firebaseUid}`).update(user));
  }

  public deleteDeliveryAddress(firebaseUid: string | undefined): Observable<any> {
    return from(this.firestore.doc(`users/${firebaseUid}`).update({
      deliveryAddress: firebase.firestore.FieldValue.delete()
    }));
  }

  public getUserOrders(firebaseUid: string): Observable<Order[]> {
    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref
          .where('firebaseUid', '==', firebaseUid)
      )
      .valueChanges({ idField: 'orderId' });
  }


  public placeSameOrder(order: Order): Observable<DocumentReference> {
    return from(this.ordersCollection.add(order));
  }

  public cancelOrder(orderId: string): Observable<any> {
    return from(this.firestore.doc(`orders/${orderId}`).update({ isCanceled: true }));
  }

}
