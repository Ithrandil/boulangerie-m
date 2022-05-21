import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '@app/user/services/user.service';
import { Order } from '@models/order';
import { switchMap, take, tap } from 'rxjs';


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  public ordersLoading: boolean = false;
  public totalUserOrders: Order[] = [];
  public displayedUserOrders: Order[] = [];
  public currentIndex: number = 0;
  public arrayCancelableOrders: boolean[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserOrdersByDate();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap((event) => {
          let isUserGoingForward = event.previousPageIndex! < event.pageIndex;
          this.currentIndex = event.pageIndex;
          if (isUserGoingForward) {
            if (event?.pageIndex == Math.floor(this.totalUserOrders.length / 10)) {
              this.displayedUserOrders = this.totalUserOrders.slice((event?.pageIndex * 10), this.totalUserOrders.length + 1);
            } else {
              this.displayedUserOrders = this.totalUserOrders.slice(((event?.pageIndex - 1) * 10), (event?.pageIndex * 10));
            }
          } else {
            this.displayedUserOrders = this.totalUserOrders.slice((event?.pageIndex * 10), ((event?.pageIndex + 1) * 10));
          }
        })
      ).subscribe();
  }

  getUserOrdersByDate(): void {
    this.ordersLoading = true;
    this.userService.getUserInfos().pipe(
      take(1),
      switchMap(userInfos => this.userService.getUserOrders(userInfos.firebaseUid as string))
    ).subscribe(orders => {
      this.totalUserOrders = orders.sort((a, b) => {
        if (a.deliveryDate > b.deliveryDate) {
          return -1;
        }
        if (a.deliveryDate < b.deliveryDate) {
          return 1;
        }
        return 0;
      });
      this.ordersLoading = false;
      this.initiateFirstPageData();
    });
  }

  initiateFirstPageData() {
    this.displayedUserOrders = this.totalUserOrders.slice(0, 10);

    let today = new Date()
    this.arrayCancelableOrders = this.totalUserOrders.map(el => {
      let deliveryDate = el.deliveryDate.toDate().getTime();
      let daysDifference = (deliveryDate - today.getTime()) / (1000 * 3600 * 24);

      if (daysDifference >= 2) {
        return true;
      } else if (daysDifference > 1 && daysDifference < 2 && today.getHours() < 18) {
        return true;
      } else {
        return false;
      }
    })
  }

  cancelOrder(orderId: string) {
    console.log("BOUTON", orderId)
  }
}
