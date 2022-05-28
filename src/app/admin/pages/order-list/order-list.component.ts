import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '@models/order';
import { add, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { OrderAdminService } from './../../services/order-admin.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public ordersOfThDayList: Order[] = [];

  public daysList: Date[] = [
    // TODO: refacto toutes les dates avec date fns ou virer la lib
    new Date(Date.now()),
    add(new Date(Date.now()), { days: 1 }),
    add(new Date(Date.now()), { days: 2 }),
    add(new Date(Date.now()), { days: 3 }),
  ];
  public tabsLabels: string[] = [
    format(this.daysList[0], 'eeee d MMMM', { locale: fr }),
    format(this.daysList[1], 'eeee d MMMM', { locale: fr }),
    format(this.daysList[2], 'eeee d MMMM', { locale: fr }),
    format(this.daysList[3], 'eeee d MMMM', { locale: fr }),
  ];

  constructor(private orderAdminService: OrderAdminService) { }

  ngOnInit(): void {
    this.getOrdersOfTheDay(new Date(Date.now()));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
  // TODO: refacto pour pouvoir inclure "Plus tard" et du coup enlever la moitié du HTML CF stale branch ou j'avais trouvé une solution!!!
  getOrdersOfTheDay(day: Date): void {
    if (!day) {
      this.orderAdminService
        .getAllOtherOrders(add(new Date(Date.now()), { days: 4 }))
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
