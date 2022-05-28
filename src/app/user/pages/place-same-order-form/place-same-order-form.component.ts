import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { FormValidatedModalComponent } from '@app/order/components/form-validated-modal/form-validated-modal.component';
import { DateUtils } from '@app/shared/utils/date.utils';
import { FormUtils } from '@app/shared/utils/form-utils';
import { UserService } from '@app/user/services/user.service';
import { ClosingDay } from '@models/closingDay';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Order } from '@models/order';
import { first, take, tap } from 'rxjs';


@Component({
  selector: 'app-place-same-order-form',
  templateUrl: './place-same-order-form.component.html',
  styleUrls: ['./place-same-order-form.component.scss'],
})
export class PlaceSameOrderFormComponent {
  public tomorrow = new Date();
  public validatedModal!: MatDialogRef<FormValidatedModalComponent>;
  public closingDays: ClosingDay[] = [];
  public orderToPlace: Order;
  public orderForm = this.fb.group({
    deliveryDate: [null, [Validators.required]],
    orderDate: [new Date(Date.now()), [Validators.required]],
  });
  public getErrorMessage = FormUtils.GetErrorMessage;
  public IsItOpenToday = DateUtils.IsItOpenToday
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
    this.tomorrow.setDate(new Date().getDate() + 1);
    this.openingDaysService
      .getAllClosingDays()
      .pipe(take(1))
      .subscribe((res) => (this.closingDays = res));

  }

  // FIXME: ici aussi il faudra revoir les 2 jours et le dimanche non pris en compte
  placeOrderAgain() {
    this.orderForm.get('orderDate')?.setValue(new Date(Date.now()));
    if (this.orderForm.valid) {
      const finalOrder = {
        ...this.orderToPlace,
        ...this.orderForm.value,
      };
      this.userService.placeSameOrder(finalOrder).pipe(
        take(1))
        .subscribe(() => {
          this.validatedModal = this.dialog.open(FormValidatedModalComponent, {
            disableClose: true,
            width: '400px',
            maxWidth: '90%',
          });
          this.validatedModal
            .afterClosed()
            .pipe(
              tap(() => {
                this.router.navigate(["/compte/mes-commandes"])
              }),
              first()
            )
            .subscribe();
        });
    }

  }

  public isItOpenToday = (d: Date | null): boolean => {
    return this.IsItOpenToday(d, this.closingDays);
  };

}
