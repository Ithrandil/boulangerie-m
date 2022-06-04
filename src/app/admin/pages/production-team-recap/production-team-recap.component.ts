import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order, OrderProduct } from '@models/order';
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
          (this.productsOfThDayList = this.mapRecapProductionTeamData(
            ordersOfTheDay
          ))
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({ next: () => this.loading = false });
  }

  mapRecapProductionTeamData(ordersList: Order[]): OrderProduct[] {
    let tmpOrderArray: OrderProduct[] = [];
    const finalArray: OrderProduct[] = [];
    ordersList.forEach((order) => {
      tmpOrderArray = [...tmpOrderArray, ...order.order];
    });
    tmpOrderArray.forEach((product) => {
      const oneProductArray = tmpOrderArray.filter(
        (el) => el.product === product.product
      );
      oneProductArray.forEach((uniqueProductOrder) => {
        if (uniqueProductOrder.comment) {
          finalArray.push(uniqueProductOrder);
        } else if (uniqueProductOrder.isSliced) {
          const indexFinalArraySlicedProduct = finalArray.findIndex(
            (el) =>
              el.product === uniqueProductOrder.product &&
              !el.comment &&
              el.isSliced
          );
          if (indexFinalArraySlicedProduct >= 0) {
            finalArray[indexFinalArraySlicedProduct].quantity +=
              uniqueProductOrder.quantity;
          } else {
            finalArray.push(uniqueProductOrder);
          }
        } else {
          const indexFinalArrayProduct = finalArray.findIndex(
            (el) =>
              el.product === uniqueProductOrder.product &&
              !el.comment &&
              !el.isSliced
          );
          if (indexFinalArrayProduct >= 0) {
            finalArray[indexFinalArrayProduct].quantity +=
              uniqueProductOrder.quantity;
          } else {
            finalArray.push(uniqueProductOrder);
          }
        }
      });
      tmpOrderArray = tmpOrderArray.filter(
        (el) => el.product !== product.product
      );
    });

    finalArray.forEach(product => product.quantity = +product.quantity.toFixed(2))
    return finalArray.sort((a, b) =>
      a.product < b.product ? -1 : a.product > b.product ? 1 : 0
    );
  }
}
