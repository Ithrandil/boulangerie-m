import { Component, OnInit } from '@angular/core';
import { mapOrderListToOrderProductListWithoutDetails } from '@app/shared/utils/orderListToOrderProductList';
import { UserService } from '@app/user/services/user.service';
import { MonthWording } from '@models/monthWording';
import { OrderProduct } from '@models/order';
import { ProductUnit, ProductUnitWording } from '@models/product';
import { getMonth, set, sub } from 'date-fns';
import { switchMap, take } from 'rxjs';

@Component({
  selector: 'app-recap-mensuel',
  templateUrl: './recap-mensuel.component.html',
  styleUrls: ['./recap-mensuel.component.scss'],
})
export class RecapMensuelComponent implements OnInit {
  // TODO: sera utilisé lors de l'implémentation de l'historique du récap en remplacement de l'afficahge dans la page mes commandes
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  public allUserOrdersProducts: OrderProduct[] = [];
  public month: string = '';
  public loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
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
        this.allUserOrdersProducts = mapOrderListToOrderProductListWithoutDetails(
          v
        );
        this.loading = false;
      });
  }
}
