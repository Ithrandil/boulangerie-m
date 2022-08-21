import { Component, OnDestroy, OnInit } from '@angular/core';
import { mapOrderListToOrderProductList } from '@app/shared/utils/orderListToOrderProductList';
import { OrderProduct } from '@models/order';
import { ProductUnit, ProductUnitWording } from '@models/product';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { OrderAdminService } from '../../services/order-admin.service';

@Component({
  selector: 'app-production-team-recap',
  templateUrl: './production-team-recap.component.html',
  styleUrls: ['./production-team-recap.component.scss'],
})
export class ProductionTeamRecapComponent implements OnInit, OnDestroy {
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  private unsubscribe$ = new Subject<void>();
  public productsOfThDayList: OrderProduct[] = [];
  public today = new Date(Date.now());
  public loading: boolean = false;

  constructor(private orderAdminService: OrderAdminService) { }

  ngOnInit(): void {
    this.getOrdersOfTheDay(this.today);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  getOrdersOfTheDay(day: Date): void {
    this.loading = true;
    this.orderAdminService
      .getOrdersByDay(day)
      .pipe(
        tap(
          (ordersOfTheDay) =>
          (this.productsOfThDayList = mapOrderListToOrderProductList(
            ordersOfTheDay
          ))
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({ next: () => this.loading = false });
  }
}
