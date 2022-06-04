import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { DateUtils } from '@app/shared/utils/date.utils';
import { FormUtils } from '@app/shared/utils/form-utils';
import { UserService } from '@app/user/services/user.service';
import { ClosingDay } from '@models/closingDay';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Order } from '@models/order';
import { take } from 'rxjs';


@Component({
  selector: 'app-place-same-order-form',
  templateUrl: './place-same-order-form.component.html',
  styleUrls: ['./place-same-order-form.component.scss'],
})
export class PlaceSameOrderFormComponent {
  public minimalDay = new Date();
  public validatedModal!: MatDialogRef<TemplateModalComponent>;
  public closingDays: ClosingDay[] = [];
  public orderToPlace: Order;
  public orderForm = this.fb.group({
    deliveryDate: [null, [Validators.required]],
    orderDate: [new Date(Date.now()), [Validators.required]],
  });
  public getErrorMessage = FormUtils.GetErrorMessage;
  public filterDaysAfterToday = DateUtils.FilterDaysAfterToday;
  public orderDays = DateUtils.OrderDays;
  public IsItOpenToday = DateUtils.IsItOpenToday;
  public setMinimalDay = DateUtils.SetMinimalDay;
  public errorMessages: FormErrorMessages = {
    deliveryDate: {
      required: 'Date de livraison obligatoire',
      matDatepickerMin: 'Date incorrecte',
    },
  };

  constructor(private router: Router, private fb: FormBuilder, private openingDaysService: OpeningDaysService, private dialog: MatDialog,
    private userService: UserService) {
    if (this.router.getCurrentNavigation()?.extras.state?.data === undefined) {
      this.router.navigate(["/compte/mes-commandes"]);
    }
    this.orderToPlace = this.router.getCurrentNavigation()!.extras.state!.data as Order;
    if (this.orderToPlace.isCanceled) {
      delete this.orderToPlace.isCanceled
    }
    delete this.orderToPlace.orderId;

    this.openingDaysService
      .getAllClosingDays()
      .pipe(take(1))
      .subscribe((res) => {
        this.closingDays = res;
        this.closingDays = this.orderDays(this.closingDays);
        this.closingDays = this.filterDaysAfterToday(this.closingDays);
        this.minimalDay = this.setMinimalDay(this.minimalDay, this.closingDays);
      });

  }

  placeOrderAgain() {
    this.orderForm.get('orderDate')?.setValue(new Date(Date.now()));
    if (this.orderForm.valid) {
      const finalOrder = {
        ...this.orderToPlace,
        ...this.orderForm.value,
      };
      this.userService.placeSameOrder(finalOrder).pipe(
        take(1))
        .subscribe({
          next: () => {
            this.validatedModal = this.dialog.open(TemplateModalComponent, {
              data: {
                title: "Votre commande a bien été repassée!",
                bodyText: `
                <p>La boulangerie M vous remercie de votre commande.</p>
                <p>En espérant vous revoir très prochainement et que votre commande vous satifera pleinement.</p>
                `,
                buttonAction: () => this.router.navigate(["/compte/mes-commandes"])
              },
              disableClose: true,
              width: '400px',
              maxWidth: '90%',
            });
          },
          error: (err) => {
            this.validatedModal = this.dialog.open(TemplateModalComponent, {
              data: {
                title: "Oups",
                bodyText: `
              <p>Une erreur a eu lieu la confirmation de votre commande, veuillez réessayer plus tard ou contacter la boulangerie directement. ${err}</p>
              `
              },
              disableClose: true,
              width: '400px',
              maxWidth: '90%',
            });
          }
        });
    }
  }

  public isItOpenToday = (d: Date | null): boolean => {
    return this.IsItOpenToday(d, this.closingDays);
  };

}
