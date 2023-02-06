import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '@models/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  public getAllItems(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products', (ref) => ref.orderBy('name'))
      .valueChanges({ idField: 'productId' });
  }

  public updateProduct(
    docId: string,
    value: Partial<Product>
  ): Observable<void> {
    return from(
      this.firestore
        .collection<Product>('products')
        .doc(docId)
        .update({ ...value })
    );
  }
}
