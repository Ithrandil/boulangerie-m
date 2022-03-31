import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-opening-days-form',
  templateUrl: './opening-days-form.component.html',
  styleUrls: ['./opening-days-form.component.scss'],
})
export class OpeningDaysFormComponent implements OnInit, OnDestroy {
  public calendarSartingDay = new Date().toISOString().split('T')[0];
  public trashIcon = faTrash;
  public addIcon = faPlusCircle;

  private unsubscribe$ = new Subject<void>();
  public allClosingDays: {
    rangeId: string;
    startingDate: any;
    endingDate: any;
  }[] = [];
  public closedDaysForm = this.fb.group({
    startingDate: [null, [Validators.required]],
    endingDate: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private openingDaysService: OpeningDaysService
  ) {
    this.openingDaysService
      .getAllClosingDays()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.allClosingDays = this.formatAndFilterClosingDatesForList(response);
      });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  public onSubmit(): void {
    const alreadyAClosedDay = this.allClosingDays.find(
      (el) => el?.startingDate?.getTime() ===
        new Date(this.closedDaysForm.value.startingDate).setHours(0, 0, 0)
    );

    if (this.closedDaysForm.valid && !alreadyAClosedDay) {
      const formatedDate = {
        startingDate: new Date(this.closedDaysForm.value.startingDate),
        endingDate: new Date(this.closedDaysForm.value.endingDate)
      }
      this.openingDaysService
        .addClosingDays(formatedDate)
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

  private formatAndFilterClosingDatesForList(
    array: { rangeId: string; startingDate: any; endingDate: any }[]
  ): { rangeId: string; startingDate: any; endingDate: any }[] {
    return array
      .sort((el1, el2) => {
        if (el1.startingDate.seconds < el2.startingDate.seconds) {
          return -1;
        }
        if (el1.startingDate.seconds > el2.startingDate.seconds) {
          return 1;
        }
        return 0;
      })
      .filter((el) => el.startingDate.seconds > Math.floor(Date.now() / 1000))
      .map((el) => {
        return {
          rangeId: el.rangeId,
          startingDate: el.startingDate.toDate(),
          endingDate:
            el.startingDate.seconds === el.endingDate.seconds
              ? null
              : el.endingDate.toDate(),
        };
      });
  }
}
