import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '@models/order';
import { take, tap } from 'rxjs/operators';

import { OrderAdminService } from './../../services/order-admin.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  public orderData!: Order;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderAdminService: OrderAdminService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.orderData = this.router.getCurrentNavigation()?.extras
        .state as Order;
    } else {
      this.orderAdminService
        .getOrderById(this.route.snapshot.params.orderId)
        .pipe(
          take(1),
          tap((order: Order) => {
            this.orderData = order;
          })
        )
        .subscribe();
    }
  }

  ngOnInit(): void {}
}
