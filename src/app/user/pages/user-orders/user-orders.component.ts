import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { mapOrderListToOrderProductList } from '@app/shared/utils/orderListToOrderProductList';
import { UserService } from '@app/user/services/user.service';
import { MonthWording } from '@models/monthWording';
import { Order, OrderProduct } from '@models/order';
import { ProductUnit, ProductUnitWording } from '@models/product';
import { getMonth, set, sub } from 'date-fns';
import { switchMap, take } from 'rxjs';
import { createModalConfig } from '@app/shared/utils/modalConfig-utils';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent implements OnInit {
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  public ordersLoading: boolean = false;
  public totalUserOrders: Order[] = [];
  public displayedUserOrders: Order[] = [];
  public currentIndex: number = 0;
  public arrayCancelableOrders: boolean[] = [];
  public cancelOrderConfirmationModal!: MatDialogRef<TemplateModalComponent>;
  public month: string = '';
  public allUserOrdersProducts: OrderProduct[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserOrdersByDate();
    this.getRecapLastMonthOrders();
  }

  getRecapLastMonthOrders() {
    this.userService
      .getUserInfos()
      .pipe(
        take(1),
        switchMap((user) => {
          let today = new Date(Date.now());
          today = set(today, {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
          });
          let firstDayOfPreviousMonth = today;
          firstDayOfPreviousMonth = sub(firstDayOfPreviousMonth, { months: 1 });
          firstDayOfPreviousMonth = set(firstDayOfPreviousMonth, { date: 1 });
          this.month = MonthWording[getMonth(firstDayOfPreviousMonth)];
          return this.userService.getUserOrdersForSpecificMonth(
            user.firebaseUid,
            firstDayOfPreviousMonth
          );
        })
      )
      .subscribe((v) => {
        this.allUserOrdersProducts = mapOrderListToOrderProductList(v);
      });
  }

  getUserOrdersByDate(): void {
    this.ordersLoading = true;
    this.userService
      .getUserInfos()
      .pipe(
        take(1),
        switchMap((userInfos) =>
          this.userService.getUserOrders(userInfos.firebaseUid as string)
        )
      )
      .subscribe((orders) => {
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

    let today = new Date();
    this.arrayCancelableOrders = this.totalUserOrders.map((el) => {
      let deliveryDate = el.deliveryDate.toDate().getTime();
      let daysDifference =
        (deliveryDate - today.getTime()) / (1000 * 3600 * 24);

      if (daysDifference >= 2) {
        return true;
      } else if (
        daysDifference > 1 &&
        daysDifference < 2 &&
        today.getHours() < 18
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  pagination(event: PageEvent) {
    let isUserGoingForward = event.previousPageIndex! < event.pageIndex;
    this.currentIndex = event.pageIndex;
    if (isUserGoingForward) {
      if (event?.pageIndex == Math.floor(this.totalUserOrders.length / 10)) {
        this.displayedUserOrders = this.totalUserOrders.slice(
          event?.pageIndex * 10,
          this.totalUserOrders.length + 1
        );
      } else {
        this.displayedUserOrders = this.totalUserOrders.slice(
          (event?.pageIndex - 1) * 10,
          event?.pageIndex * 10
        );
      }
    } else {
      this.displayedUserOrders = this.totalUserOrders.slice(
        event?.pageIndex * 10,
        (event?.pageIndex + 1) * 10
      );
    }
  }

  cancelOrder(orderId: string | undefined) {
    this.cancelOrderConfirmationModal = this.dialog.open(
      TemplateModalComponent,
      createModalConfig({
        title: 'Annuler la commande',
        bodyText: `
        <p>Êtes-vous sûr de vouloir annuler votre commande ?</p>
        <p>Vous aurez toujours la possibilité de repasser la même commande après l'annulation.</p>
        <p>De plus, elle sera toujours visible dans votre liste des commandes.</p>
        `,
        extraCloseButton: true,
        buttonText: 'Annuler la commande',
        buttonAction: () =>
          this.userService
            .cancelOrder(orderId as string)
            .pipe(take(1))
            .subscribe({
              error: (err) => {
                this.cancelOrderConfirmationModal = this.dialog.open(
                  TemplateModalComponent,
                  createModalConfig({
                    title: 'Oups',
                    bodyText: `
                <p>Une erreur a eu lieu pendant l'annulation de votre commande ${orderId}, veuillez réessayer plus tard ou contacter la boulangerie directement. ${err}</p>
                `,
                  })
                );
              },
            }),
      })
    );
  }

  placeSameOrder(order: Order) {
    this.router.navigate(['/compte/repasser-commande'], {
      state: { data: { ...order } },
    });
  }
}
