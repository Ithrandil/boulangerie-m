import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '@models/order';
import { Observable } from 'rxjs';
import { add, set } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class OrderAdminService {
  constructor(private firestore: AngularFirestore) {}

  getAllOtherOrders(day: Date): Observable<Order[]> {
    day = set(day, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref.where('deliveryDate', '>=', day).orderBy('deliveryDate')
      )
      .valueChanges({ idField: 'orderId' });
  }

  getOrdersByDay(day: Date): Observable<Order[]> {
    day = set(day, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    let dayAfter = add(day, { days: 1 });
    dayAfter = set(dayAfter, {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });

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
