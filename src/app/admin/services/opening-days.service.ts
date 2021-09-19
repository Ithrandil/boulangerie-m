import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpeningDaysService {
  constructor(private firestore: AngularFirestore) {}

  public getAllClosingDays(): Observable<
    { rangeId: string; startingDate: any; endingDate: any }[]
  > {
    return this.firestore
      .collection<{ startingDate: any; endingDate: any }>('closingDays')
      .valueChanges({ idField: 'rangeId' });
  }

  public addClosingDays(days: {
    startingDate: Date;
    endingDate: Date;
  }): Observable<DocumentReference> {
    return from(
      this.firestore
        .collection<{ startingDate: Date; endingDate: Date }>('closingDays')
        .add(days)
    );
  }

  public deleteClosingDays(rangeId: string) {
    return from(
      this.firestore
        .collection<{ startingDate: Date; endingDate: Date }>('closingDays')
        .doc(rangeId)
        .delete()
    );
  }
}
