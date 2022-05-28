import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '@models/order';
import { add, set } from 'date-fns';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderAdminService {

  constructor(private firestore: AngularFirestore) { }

  getAllOtherOrders(day: Date): Observable<Order[]> {
    day = set(day, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref.where('deliveryDate', '>=', day).orderBy('deliveryDate')
      )
      .valueChanges({ idField: 'orderId' }).pipe(
        map((orders: Order[]) => this.removeCanceledOrders(orders)
        ));
  }

  getOrdersByDay(day: Date): Observable<Order[]> {
    day = set(day, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    // TODO: refacto toutes les dates avec date fns ou virer la lib
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
      .valueChanges({ idField: 'orderId' }).pipe(
        map((orders: Order[]) => this.removeCanceledOrders(orders)
        ));
  }

  private removeCanceledOrders(orders: Order[]): Order[] {
    return orders.filter(order => !order.isCanceled);
  }
}
