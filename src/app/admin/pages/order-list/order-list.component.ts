import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '@models/order';
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
  public currentOrdersList: Order[] = [];
  constructor(private orderAdminService: OrderAdminService) {}

  ngOnInit(): void {
    this.orderAdminService
      .getAllCurentOrders()
      .pipe(
        tap((currentOrders) => {
          this.currentOrdersList = currentOrders;
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
