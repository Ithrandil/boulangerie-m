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
    // TODO: PB: demande est de trier par date de commande passée et d'afficher les 4
    // derniers jours mais que se passe t'il si quelqu'un commande pour dans une
    // semaine? La commande va disparaitre avant d'avoir été livrée
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - 4);
    const today = new Date();
    return this.firestore
      .collection<Order>('orders', (ref) =>
        // ref.where('orderDate', '>=', limitDate).orderBy('orderDate')
        ref.where('deliveryDate', '>=', today).orderBy('deliveryDate')
      )
      .valueChanges({ idField: 'orderId' });
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.firestore
      .doc<Order>(`orders/${orderId}`)
      .valueChanges() as Observable<Order>;
  }
}
