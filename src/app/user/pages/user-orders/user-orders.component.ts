import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/user/services/user.service';
import { Order } from '@models/order';
import { switchMap, take } from 'rxjs';


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent implements OnInit {
  public ordersLoading: boolean = false;
  public userOrders: Order[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserOrdersByDate();
  }

  getUserOrdersByDate(): void {
    this.ordersLoading = true;
    this.userService.getUserInfos().pipe(
      take(1),
      switchMap(userInfos => this.userService.getUserOrders(userInfos.firebaseUid as string))
    ).subscribe(orders => {
      this.userOrders = orders.sort((a, b) => {
        if (a.deliveryDate > b.deliveryDate) {
          return -1;
        }
        if (a.deliveryDate < b.deliveryDate) {
          return 1;
        }
        return 0;
      });
      this.ordersLoading = false;
    });
  }
}
