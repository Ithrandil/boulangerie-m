import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Product } from '@models/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private firestore: AngularFirestore) {
    this.productsCollection = firestore.collection<Product>('products');
  }

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
  public createProduct(value: Product): Observable<DocumentReference> {
    return from(this.productsCollection.add(value));
  }

  public deleteProduct(docId: string): Observable<void> {
    return from(
      this.firestore.collection<Product>('products').doc(docId).delete()
    );
  }
}
