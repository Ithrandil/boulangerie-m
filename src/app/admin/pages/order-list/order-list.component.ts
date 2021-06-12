import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '@models/order';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { add } from 'date-fns';
import { OrderAdminService } from './../../services/order-admin.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public ordersOfThDayList: Order[] = [];

  public today: Date = new Date(Date.now());
  public todayPlus1: Date = add(this.today, { days: 1 });
  public todayPlus2: Date = add(this.today, { days: 2 });
  public todayPlus3: Date = add(this.today, { days: 3 });
  public fourDaysAfter: Date = add(this.today, { days: 4 });
  public tabsLabels: Date[] = [
    this.today,
    this.todayPlus1,
    this.todayPlus2,
    this.todayPlus3,
  ];

  constructor(private orderAdminService: OrderAdminService) {}

  ngOnInit(): void {
    this.getOrdersOfTheDay(this.today);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  getOrdersOfTheDay(day: Date): void {
    if (!day) {
      this.orderAdminService
        .getAllOtherOrders(this.fourDaysAfter)
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
}
