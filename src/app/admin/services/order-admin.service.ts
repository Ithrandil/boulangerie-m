import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '@models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderAdminService {
  constructor(private firestore: AngularFirestore) {}

  getAllOtherOrders(day: Date): Observable<Order[]> {
    day.setHours(0, 0, 0, 0);

    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref.where('deliveryDate', '>=', day).orderBy('deliveryDate')
      )
      .valueChanges({ idField: 'orderId' });
  }

  getOrdersByDay(day: Date): Observable<Order[]> {
    day.setHours(0, 0, 0, 0);
    const dayAfter = new Date();
    dayAfter.setDate(day.getDate() + 1);
    dayAfter.setHours(0, 0, 0, 0);

    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref
          .where('deliveryDate', '>=', day)
          .where('deliveryDate', '<', dayAfter)
      )
      .valueChanges({ idField: 'orderId' });
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.firestore
      .doc<Order>(`orders/${orderId}`)
      .valueChanges() as Observable<Order>;
  }
}
