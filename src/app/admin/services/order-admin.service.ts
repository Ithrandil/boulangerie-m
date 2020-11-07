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
    limitDate.setDate(limitDate.getDate() - 4);
    return this.firestore
      .collection<Order>('orders', (ref) =>
        ref.where('orderDate', '>=', limitDate).orderBy('orderDate')
      )
      .valueChanges({ idField: 'orderId' });
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.firestore
      .doc<Order>(`orders/${orderId}`)
      .valueChanges() as Observable<Order>;
  }
}
