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
import { ProductUnit, ProductUnitWording } from '@models/product';
import { take } from 'rxjs';
import { createModalConfig } from '@app/shared/utils/modalConfig-utils';

@Component({
  selector: 'app-place-same-order-form',
  templateUrl: './place-same-order-form.component.html',
  styleUrls: ['./place-same-order-form.component.scss'],
})
export class PlaceSameOrderFormComponent {
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  public minimalDay = new Date();
  public validatedModal!: MatDialogRef<TemplateModalComponent>;
  public closingDays: ClosingDay[] = [];
  public orderToPlace: Order;
  public selectDeliveryTime = false;
  public orderForm = this.fb.group({
    deliveryDate: [null, [Validators.required]],
    deliveryTime: [null],
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private openingDaysService: OpeningDaysService,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state?.data === undefined) {
      this.router.navigate(['/compte/mes-commandes']);
    }
    this.orderToPlace = this.router.getCurrentNavigation()!.extras.state!
      .data as Order;
    if (this.orderToPlace.isCanceled) {
      delete this.orderToPlace.isCanceled;
    }
    delete this.orderToPlace.orderId;

    this.openingDaysService.mapClosingDaysForCalendar().subscribe((res) => {
      this.closingDays = res.orderedClosingDays;
      this.minimalDay = res.minimalDay;
    });
  }

  placeOrderAgain() {
    this.orderForm.get('orderDate')?.setValue(new Date(Date.now()));
    if (this.orderForm.valid) {
      const finalOrder = {
        ...this.orderToPlace,
        ...this.orderForm.value,
      };
      this.userService
        .placeSameOrder(finalOrder)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.validatedModal = this.dialog.open(
              TemplateModalComponent,
              createModalConfig({
                title: 'Votre commande a bien été repassée!',
                bodyText: `
                <p>La boulangerie M vous remercie pour votre commande.</p>
                <p>En espérant vous revoir très prochainement et que votre commande vous satisfera pleinement.</p>
                `,
                buttonAction: () =>
                  this.router.navigate(['/compte/mes-commandes']),
              })
            );
          },
          error: (err) => {
            this.validatedModal = this.dialog.open(
              TemplateModalComponent,
              createModalConfig({
                title: 'Oups',
                bodyText: `
              <p>Une erreur a eu lieu la confirmation de votre commande, veuillez réessayer plus tard ou contacter la boulangerie directement. ${err}</p>
              `,
              })
            );
          },
        });
    }
  }

  public isItOpenToday = (d: Date | null): boolean => {
    return this.IsItOpenToday(d, this.closingDays);
  };

  public specificDeliveryTime(checked: boolean): void {
    this.selectDeliveryTime = checked;
    if (this.selectDeliveryTime) {
      this.orderForm.get('deliveryTime')?.enable();
    } else {
      this.orderForm.get('deliveryTime')?.reset();
      this.orderForm.get('deliveryTime')?.disable();
    }
  }
}
