import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { ClosingDay } from '@models/closingDay';
import { from, Observable } from 'rxjs';

// FIXME: implement proper interface for closing day, one is already created in folder, manage undefined values
@Injectable({
  providedIn: 'root',
})
export class OpeningDaysService {
  private closingDaysCollection: AngularFirestoreCollection<ClosingDay>;
  closingDays: Observable<{ startingDate: any; endingDate: any; rangeId: string; }[]>

  constructor(private readonly firestore: AngularFirestore) {
    this.closingDaysCollection = this.firestore.collection<{ startingDate: any; endingDate: any; rangeId: string; }>('closingDays');
    this.closingDays = this.closingDaysCollection.valueChanges({ idField: 'rangeId' });
  }

  public getAllClosingDays(): Observable<
    { startingDate: any; endingDate: any; rangeId: string; }[]
  > {
    return this.closingDays;
  }

  public addClosingDays(days: {
    startingDate: Date;
    endingDate: Date;
  }): Observable<DocumentReference> {
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
