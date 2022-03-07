import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '@models/order';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { add, format } from 'date-fns';
import { OrderAdminService } from './../../services/order-admin.service';
import { fr } from 'date-fns/locale';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy, AfterViewInit {
  private unsubscribe$ = new Subject<void>();
  public ordersOfThDayList: Order[] = [];
  private previousIndex: number = -1;

  public daysList: Date[] = [
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
    "Plus tard"
  ];

  constructor(private orderAdminService: OrderAdminService) { }

  ngOnInit(): void {
    this.getOrdersOfTheDay(0);
  }

  ngAfterViewInit(): void {
    this.setActiveTab(0);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  getOrdersOfTheDay(index: number): void {
    if (index > 3) {
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
        .getOrdersByDay(this.daysList[index])
        .pipe(
          tap((ordersOfTheDay) => {
            this.ordersOfThDayList = ordersOfTheDay;
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe();
    }
    if (this.previousIndex >= 0) {
      this.setActiveTab(index);
    }
  }

  private setActiveTab(index: number): void {
    document.getElementById(index as unknown as string)?.classList.add("active");
    if (this.previousIndex >= 0) {
      document.getElementById(this.previousIndex as unknown as string)?.classList.remove("active");
    }
    this.previousIndex = index;
  }
}
