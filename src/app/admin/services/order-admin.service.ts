import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '@models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderAdminService {
  constructor(private firestore: AngularFirestore) {}

  getAllCurentOrders(): Observable<Order[]> {
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() + 7);
    const today = new Date();
    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref
          .where('deliveryDate', '<=', limitDate)
          .where('deliveryDate', '>=', today)
          .orderBy('deliveryDate')
      )
      .valueChanges({ idField: 'orderId' });
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.firestore
      .doc<Order>(`orders/${orderId}`)
      .valueChanges() as Observable<Order>;
  }
}
