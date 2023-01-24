import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { DateUtils } from '@app/shared/utils/date.utils';
import { ClosingDay, ClosingDayForHumans } from '@models/closingDay';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-opening-days-form',
  templateUrl: './opening-days-form.component.html',
  styleUrls: ['./opening-days-form.component.scss'],
})
export class OpeningDaysFormComponent implements OnDestroy {
  public allClosingDays: ClosingDay[] = [];
  public allClosingDaysToHuman: ClosingDayForHumans[] = [];
  public closedDaysForm = this.fb.group({
    startingDate: [null, [Validators.required]],
    endingDate: [null, [Validators.required]],
  });
  public filterDaysAfterToday = DateUtils.FilterDaysAfterToday;
  public orderDays = DateUtils.OrderDays;
  public formatDaysToHumanDate = DateUtils.formatDaysToHumanDate;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private openingDaysService: OpeningDaysService
  ) {
    this.openingDaysService
      .getAllClosingDays()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.allClosingDays = this.filterDaysAfterToday(response);
        this.allClosingDays = this.orderDays(this.allClosingDays);
        this.allClosingDaysToHuman = this.formatDaysToHumanDate(
          this.allClosingDays
        );
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  public onSubmit(): void {
    this.closedDaysForm.markAllAsTouched();
    const alreadyAClosedDay = this.allClosingDays.find(
      (el) =>
        el?.startingDate.seconds * 1000 ===
        this.closedDaysForm?.value?.startingDate?.getTime()
    );
    if (this.closedDaysForm.valid && !alreadyAClosedDay) {
      this.openingDaysService
        .addClosingDays(this.closedDaysForm.value)
        .pipe(take(1))
        .subscribe();
    }
  }

  public deleteClosingDays(rangeId: string): void {
    this.openingDaysService
      .deleteClosingDays(rangeId)
      .pipe(take(1))
      .subscribe();
  }
}
