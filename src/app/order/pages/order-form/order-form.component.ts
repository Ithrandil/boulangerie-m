import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Product } from '@models/product';
import { take, tap } from 'rxjs/operators';

import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  public productList: Product[] = [];

  public displayDeliveryForm = false;
  public orderForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    address: this.fb.group({
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      city: ['', [Validators.required]],
    }),
    deliveryAddress: this.fb.group(
      {
        street: ['', [Validators.required]],
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
        city: ['', [Validators.required]],
      },
      { disabled: !this.displayDeliveryForm }
    ),
    hasDifferentDeliveryAddress: [
      this.displayDeliveryForm,
      [Validators.required],
    ],
  });
  private errorMessages: FormErrorMessages = {
    name: {
      required: 'Nom de votre entreprise obligatoire',
    },
    phone: {
      required: 'Numéro de téléphone obligatoire',
      pattern: 'Doit contenir 10 chiffres',
    },
    street: {
      required: 'Rue obligatoire',
    },
    zipCode: {
      required: 'Code postal obligatoire',
      pattern: 'Doit contenir 5 chiffres',
    },
    city: {
      required: 'Ville obligatoire',
    },
  };

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.orderService
      .getAllAvailableItems()
      .pipe(
        take(1),
        tap((resProdList) => {
          this.productList = resProdList;
          // const group: any = {};
          // resProdList.forEach(product => {
          //   group[product.name]
          // })
        })
      )
      .subscribe();
    this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
  }

  public getErrorMessage(controlName: string, controlGroup?: string): string {
    const errors = [];
    if (controlGroup) {
      if (
        this.orderForm.get(controlGroup)?.get(controlName)?.hasError('required')
      ) {
        return this.errorMessages[controlName].required;
      }
      if (this.orderForm.get(controlGroup)?.get(controlName)?.errors) {
        for (const key of Object.keys(
          this.orderForm.get(controlGroup)?.get(controlName)?.errors as {}
        )) {
          errors.push(this.errorMessages[controlName][key]);
        }
      }
    } else {
      if (this.orderForm.get(controlName)?.hasError('required')) {
        return this.errorMessages[controlName].required;
      }
      if (this.orderForm.get(controlName)?.errors) {
        for (const key of Object.keys(
          this.orderForm.get(controlName)?.errors as {}
        )) {
          errors.push(this.errorMessages[controlName][key]);
        }
      }
    }
    return errors.join(', ');
  }

  public hasDifferentDeliveryAddress(checked: boolean): void {
    this.displayDeliveryForm = checked;
    if (this.displayDeliveryForm) {
      this.orderForm.get('deliveryAddress')?.enable();
    } else {
      this.orderForm.get('deliveryAddress')?.disable();
    }
  }

  public onSubmit(): void {
    if (this.orderForm.valid) {
      this.orderService.addOrder(this.orderForm.value);
    }
  }
}
