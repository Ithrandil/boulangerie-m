import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { ClosingDay } from '@models/closingDay';
import { from, map, Observable, take } from 'rxjs';
import { DateUtils } from '@app/shared/utils/date.utils';

@Injectable({
  providedIn: 'root',
})
export class OpeningDaysService {
  private closingDaysCollection: AngularFirestoreCollection<ClosingDay>;
  private orderDays = DateUtils.OrderDays;
  private filterDaysAfterToday = DateUtils.FilterDaysAfterToday;
  private setMinimalDay = DateUtils.SetMinimalDay;
  closingDays: Observable<ClosingDay[]>;

  constructor(private readonly firestore: AngularFirestore) {
    this.closingDaysCollection = this.firestore.collection<ClosingDay>(
      'closingDays'
    );
    this.closingDays = this.closingDaysCollection.valueChanges({
      idField: 'rangeId',
    });
  }

  public getAllClosingDays(): Observable<ClosingDay[]> {
    return this.closingDays;
  }

  public addClosingDays(days: ClosingDay): Observable<DocumentReference> {
    return from(this.closingDaysCollection.add(days));
  }

  public deleteClosingDays(rangeId: string) {
    return from(this.closingDaysCollection.doc(rangeId).delete());
  }

  public mapClosingDaysForCalendar(): Observable<{
    orderedClosingDays: ClosingDay[];
    minimalDay: Date;
  }> {
    return this.getAllClosingDays().pipe(
      take(1),
      map((allClosingDays) => {
        // Nécessaire de d'abord filtrer les jours fermés à venir avant de passer au setMinimalDay
        const orderedClosingDays = this.filterDaysAfterToday(
          this.orderDays(allClosingDays)
        );
        return {
          orderedClosingDays,
          minimalDay: this.setMinimalDay(new Date(), orderedClosingDays),
        };
      })
    );
  }
}
