import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecapMensuelService } from '@app/admin/services/recap-mensuel-service';
import { mapOrderListToOrderProductList } from '@app/shared/utils/orderListToOrderProductList';
import { MonthWording } from '@models/monthWording';
import { OrderProduct } from '@models/order';
import { ProductUnit, ProductUnitWording } from '@models/product';
import { getMonth, set, sub } from 'date-fns';
import { map, switchMap, take } from 'rxjs';


@Component({
  selector: 'app-recap-utilisateur-mensuel',
  templateUrl: './recap-utilisateur-mensuel.component.html',
  styleUrls: ['./recap-utilisateur-mensuel.component.scss'],
})
export class RecapUtilisateurMensuelComponent implements OnInit {
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  public allUserOrdersProducts: OrderProduct[] = [];
  public userName: string = "";
  public month: string = "";
  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private recapService: RecapMensuelService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.pipe(
      take(1),
      map(params => params.userId),
      switchMap(userId => {
        let today = new Date(Date.now());
        today = set(today, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        let firstDayOfPreviousMonth = today;
        firstDayOfPreviousMonth = sub(firstDayOfPreviousMonth, { months: 1 });
        firstDayOfPreviousMonth = set(firstDayOfPreviousMonth, { date: 1 });
        this.month = MonthWording[getMonth(firstDayOfPreviousMonth)];
        return this.recapService.getUserOneMonthOrder(userId, firstDayOfPreviousMonth);
      })
    )
      .subscribe(v => {
        if (v.length > 0) {
          this.allUserOrdersProducts = mapOrderListToOrderProductList(v);
          this.userName = v[0].name;
        }
        this.loading = false;
      });
  }
}
