import { Component, OnDestroy, OnInit } from '@angular/core';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { DateUtils } from '@app/shared/utils/date.utils';
import { ClosingDay } from '@models/closingDay';
import { Order } from '@models/order';
import { ProductUnit, ProductUnitWording } from '@models/product';
import { add, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { OrderAdminService } from './../../services/order-admin.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy {
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  public loading: boolean = false;
  private day = new Date();
  private unsubscribe$ = new Subject<void>();
  public ordersOfThDayList: Order[] = [];
  private closingDays: ClosingDay[] = [];
  private orderDays = DateUtils.OrderDays;
  private FilterDaysAfterToday = DateUtils.FilterDaysAfterToday;
  private IsItOpenToday = DateUtils.IsItOpenToday;
  public daysList: Date[] = [];
  public tabsLabels: string[] = [];

  constructor(private orderAdminService: OrderAdminService, private openingDaysService: OpeningDaysService) { }

  ngOnInit(): void {
    this.loading = true;
    this.openingDaysService
      .getAllClosingDays()
      .pipe(take(1))
      .subscribe((res) => {
        this.closingDays = res;
        this.closingDays = this.orderDays(this.closingDays);
        this.closingDays = this.FilterDaysAfterToday(this.closingDays);

        while (this.daysList.length < 4) {
          if (this.isItOpenday(this.day)) {
            this.daysList.push(this.day);
            this.tabsLabels.push(format(this.day, 'eeee d MMMM', { locale: fr }));
          }
          this.day = add(this.day, { days: 1 });
        }

        this.daysList.push(this.day);
        this.tabsLabels.push("Plus tard");

        this.getOrdersOfTheDay(this.daysList[0]);

        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  getOrdersOfTheDay(day: Date): void {
    if (day === this.daysList.slice(-1)[0]) {
      this.orderAdminService
        .getAllOtherOrders(day)
        .pipe(
          tap((ordersOfTheDay) => {
            this.ordersOfThDayList = ordersOfTheDay;
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe();
    } else {
      this.orderAdminService
        .getOrdersByDay(day)
        .pipe(
          tap((ordersOfTheDay) => {
            this.ordersOfThDayList = ordersOfTheDay;
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe();
    }
  }

  private isItOpenday = (d: Date | null): boolean => {
    return this.IsItOpenToday(d, this.closingDays);
  };
}
