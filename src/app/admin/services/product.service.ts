import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '@models/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: AngularFirestore) { }

  public getAllItems(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products', (ref) => ref.orderBy('name'))
      .valueChanges({ idField: 'productId' });
  }

  public updateProductAvailability(
    docId: string,
    value: boolean
  ): Observable<void> {
    return from(
      this.firestore
        .collection<Product>('products')
        .doc(docId)
        .update({ available: value } as Product)
    );
  }

  public updateProductShortDelivery(
    docId: string,
    value: boolean
  ): Observable<void> {
    return from(
      this.firestore
        .collection<Product>('products')
        .doc(docId)
        .update({ shortDelivery: value } as Product)
    );
  }
}
