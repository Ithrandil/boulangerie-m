import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '@models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  constructor(private firestore: AngularFirestore) {}

  getAllCurentOrders(): Observable<Order[]> {
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - 4);
    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref.where('orderDate', '>=', limitDate)
      )
      .valueChanges();
  }
}
