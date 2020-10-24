import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from './../models/product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private firestore: AngularFirestore) {}

  getAllAvailableItems(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products', (ref) =>
        ref.where('available', '==', true)
      )
      .valueChanges();
  }
}
