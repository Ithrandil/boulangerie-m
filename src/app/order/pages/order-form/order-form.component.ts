import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormErrorMessages } from '@models/formErrorMessages';
import { OrderList } from '@models/order';
import { Product } from '@models/product';
import { combineLatest, Observable, Subject } from 'rxjs';
import { switchMapTo, take, takeUntil, tap } from 'rxjs/operators';

import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnDestroy {
  public tomorrow = new Date();
  public showDeliveryMessage = false;
  public showShortDeliveryMessage = false;
  public showOrderNeedValidationMessage = false;
  private unsubscribe$ = new Subject<void>();
  public productList: Product[] = [];
  public itemFormGroup: FormGroup;
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
    deliveryDate: [null, [Validators.required]],
    orderDate: [new Date(Date.now()), [Validators.required]],
    totalPrice: [0, [Validators.required]],
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
    deliveryDate: {
      required: 'Date de livraison obligatoire',
      matDatepickerMin: 'Date incorrecte',
    },
  };

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.tomorrow.setDate(new Date().getDate() + 1);

    this.itemFormGroup = this.fb.group({
      default: [''],
    });
    this.orderService
      .getAllAvailableItems()
      .pipe(
        take(1),
        tap((resProdList) => {
          this.productList = resProdList;
          this.itemFormGroup.removeControl('default');
          resProdList.forEach((product) => {
            this.itemFormGroup?.addControl(product.name, new FormControl(null));
          });
        }),
        switchMapTo(this.itemFormGroup.valueChanges),
        takeUntil(this.unsubscribe$),
        tap((itemFormData) => {
          this.calcTotalPrice(itemFormData);
        })
      )
      .subscribe();
    this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
    this.filterShortDeliveryProducts();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  private calcTotalPrice(itemFormData: { [key: string]: number }): void {
    let totalPrice = 0;
    for (const [itemName, quantity] of Object.entries(itemFormData) as [
      string,
      number
    ][]) {
      if (quantity) {
        totalPrice +=
          quantity *
          (this.productList.find((el) => el.name === itemName) as Product)
            .price;
      }
      this.orderForm.get('totalPrice')?.setValue(totalPrice);
    }
  }

  public hasDifferentDeliveryAddress(checked: boolean): void {
    this.displayDeliveryForm = checked;
    if (this.displayDeliveryForm) {
      this.orderForm.get('deliveryAddress')?.enable();
    } else {
      this.orderForm.get('deliveryAddress')?.disable();
    }
  }

  private filterShortDeliveryProducts(): void {
    combineLatest([
      this.orderForm.get('deliveryDate')?.valueChanges as Observable<Date>,
      this.orderForm.get('orderDate')?.valueChanges as Observable<Date>,
    ])
      .pipe(
        tap(([deliveryDate, orderDate]) => {
          const orderTime = orderDate.getHours();
          const differenceIndays =
            (deliveryDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24);

          if (orderTime < 11 && differenceIndays >= 1) {
            this.showDeliveryMessage = true;
            this.showShortDeliveryMessage = false;
            this.showOrderNeedValidationMessage = false;
            console.log(
              `commande avant 11h et jour de livraison a plus dun jour
              => aucune contrainte
              ET on informe de la livraison le jour J entre 10h & 12h`
            );
          } else if (
            orderTime >= 11 &&
            orderTime < 18 &&
            differenceIndays < 1
          ) {
            this.showDeliveryMessage = false;
            this.showOrderNeedValidationMessage = true;
            this.productList.forEach((product) => {
              if (!product.shortDelivery) {
                this.showShortDeliveryMessage = true;
                this.itemFormGroup.get(product.name)?.disable();
              }
            });
            console.log(
              `commande entre 11 & 18h et demande de livraison le lendemain
              => commande à valider manuellement
               ET shortDelivery products disabled
              ET on naffiche PAAAS la livraison jour J entre 10 & 12`
            );
          } else if (orderTime < 11 && differenceIndays < 1) {
            this.showDeliveryMessage = true;
            this.showOrderNeedValidationMessage = false;
            this.productList.forEach((product) => {
              if (!product.shortDelivery) {
                this.showShortDeliveryMessage = true;
                this.itemFormGroup.get(product.name)?.disable();
              }
            });
            console.log(
              `commande avant 11h pour livraison le lendemain
              => shortDelivery products disabled
              ET on informe de la livraison le jour J entre 10h & 12h`
            );
          }
          // TODO: DEMANDER A AYMERIC LA GESTION DU CAS: Demande d'une commande après 18h pour le lendemain?
          // - On empêche le fait de pouvoir le faire (on change le trigger du min date a 18h)
          // - On considère ca comme une livraison pour le lendemain a confirmer?
        })
      )
      .subscribe();
    this.orderForm.get('orderDate')?.updateValueAndValidity();
  }

  public onSubmit(): void {
    this.orderForm.get('orderDate')?.setValue(new Date(Date.now()));
    const orderList: OrderList = [];
    for (const [itemName, quantity] of Object.entries(
      this.itemFormGroup.value
    ) as [string, number][]) {
      if (quantity) {
        orderList.push({
          product: itemName,
          quantity,
          unit: (this.productList.find((el) => el.name === itemName) as Product)
            .unit,
        });
      }
    }
    if (this.orderForm.valid && orderList.length > 0) {
      this.orderService.addOrder({
        ...this.orderForm.value,
        order: orderList,
      });
    }
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
}
