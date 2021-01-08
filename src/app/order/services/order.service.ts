import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Order } from '@models/order';
import { Product } from '@models/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private firestore: AngularFirestore) {}

  public getAllAvailableItems(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products', (ref) =>
        ref.where('available', '==', true)
      )
      .valueChanges();
  }

  public addOrder(order: Order): Observable<DocumentReference> {
    return from(this.firestore.collection<Order>('orders').add(order));
  }
}
