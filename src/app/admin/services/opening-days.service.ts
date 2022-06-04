import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { ClosingDay } from '@models/closingDay';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpeningDaysService {
  private closingDaysCollection: AngularFirestoreCollection<ClosingDay>;
  closingDays: Observable<ClosingDay[]>

  constructor(private readonly firestore: AngularFirestore) {
    this.closingDaysCollection = this.firestore.collection<ClosingDay>('closingDays');
    this.closingDays = this.closingDaysCollection.valueChanges({ idField: 'rangeId' });
  }

  public getAllClosingDays(): Observable<ClosingDay[]> {
    return this.closingDays;
  }

  public addClosingDays(days: ClosingDay): Observable<DocumentReference> {
    return from(
      this.closingDaysCollection.add(days)
    );
  }

  public deleteClosingDays(rangeId: string) {
    return from(
      this.closingDaysCollection
        .doc(rangeId)
        .delete()
    );
  }
}
