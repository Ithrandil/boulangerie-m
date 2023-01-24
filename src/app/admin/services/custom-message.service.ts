import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { from, map, Observable, switchMap } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  private customMessageCollection: AngularFirestoreCollection<string>;

  constructor(private readonly firestore: AngularFirestore) {
    this.customMessageCollection = this.firestore.collection<string>(
      'customMessages'
    );
  }

  public getCurrentCustomMessage(): Observable<any> {
    return this.customMessageCollection
      .valueChanges({ idField: 'messageId' })
      .pipe(map((el) => el[0]));
  }

  public createOrUpdateCustomMessage(messageData: any): Observable<any> {
    return this.customMessageCollection.snapshotChanges().pipe(
      take(1),
      switchMap((el) => {
        if (el.length > 0) {
          return from(
            this.firestore
              .doc(`customMessages/${el[0].payload.doc.id}`)
              .update(messageData)
          );
        } else {
          return from(this.customMessageCollection.add(messageData));
        }
      })
    );
  }

  public updateShowCustomMessage(showMessage: boolean, messageId: string) {
    return from(
      this.firestore.doc(`customMessages/${messageId}`).update({ showMessage })
    );
  }
}
