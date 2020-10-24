import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from './models/product';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Observable<Product[]>;
  users: Observable<User[]>;
  // orders: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection<Product>('products').valueChanges();
    this.users = firestore.collection<User>('users').valueChanges();
    // this.orders = firestore.collection<any>('orders').valueChanges();
    // this.orders.subscribe((v) => {
    //   console.log(v[0].userId);
    //   firestore
    //     .collection<any>('users')
    //     .doc(v[0].userId)
    //     .get()
    //     .subscribe((v1) => console.log('resultat user', v1.data()));
    // });
  }
}
