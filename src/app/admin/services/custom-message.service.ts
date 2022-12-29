import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  private customMessageCollection: AngularFirestoreCollection<string>;
  messages: Observable<string[]>;

  constructor(private readonly firestore: AngularFirestore) {
    this.customMessageCollection = this.firestore.collection<string>(
      'customMessages'
    );
    this.messages = this.customMessageCollection.valueChanges({
      idField: 'messageId',
    });
  }

  public getAllMessages(): Observable<string[]> {
    return this.messages;
  }

  public addClosingDays(message: string): Observable<DocumentReference> {
    return from(this.customMessageCollection.add(message));
  }
}
