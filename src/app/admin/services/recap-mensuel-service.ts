import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '@models/order';
import { User } from '@models/user';
import { add, sub } from 'date-fns';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RecapMensuelService {

    constructor(private firestore: AngularFirestore, public auth: AngularFireAuth) {
    }

    public getAllUsers(): Observable<User[]> {
        return this.firestore
            .collection<User>('users', (ref) => ref.orderBy('name'))
            .valueChanges({ idField: 'userId' });
    }

    public getUserOneMonthOrder(userId: string, firstDayOfMonth: Date): Observable<Order[]> {
        let lastDayOfMonth = firstDayOfMonth;
        lastDayOfMonth = add(lastDayOfMonth, { months: 1 });
        lastDayOfMonth = sub(lastDayOfMonth, { seconds: 1 });

        return this.firestore
            .collection<Order>('orders', (ref) =>
                ref
                    .where('firebaseUid', '==', userId)
                    .where('deliveryDate', '>=', firstDayOfMonth)
                    .where('deliveryDate', '<=', lastDayOfMonth)
            )
            .valueChanges({ idField: 'orderId' })
            .pipe(
                map((orders: Order[]) => orders.filter(order => !order.isCanceled))
            );
    }
}
