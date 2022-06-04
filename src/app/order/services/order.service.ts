import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Order } from '@models/order';
import { Product } from '@models/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private ordersCollection: AngularFirestoreCollection<Order>;

  constructor(private firestore: AngularFirestore) {
    this.ordersCollection = firestore.collection<Order>('orders');
  }


  public getAllAvailableItems(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products', (ref) =>
        ref.where('available', '==', true)
      )
      .valueChanges();
  }

  public addOrder(order: Order): Observable<DocumentReference> {
    return from(this.ordersCollection.add(order));
  }
}
