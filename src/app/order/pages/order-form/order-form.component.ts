import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormValidatedModalComponent } from '@app/order/components/form-validated-modal/form-validated-modal.component';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Order, OrderProduct, OrderSummary } from '@models/order';
import { Product, ProductCategory } from '@models/product';
import { combineLatest, Observable, Subject } from 'rxjs';
import { first, take, takeUntil, tap } from 'rxjs/operators';

import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnDestroy {
  public orderSummary: OrderSummary = {
    products: [],
    sliced: [],
    comments: [],
  };
  public PRODUCTCATEGORY = ProductCategory;
  public tomorrow = new Date();
  public validatedModal!: MatDialogRef<FormValidatedModalComponent>;
  public showDeliveryMessage = false;
  public showShortDeliveryMessage = false;
  public showOrderNeedValidationMessage = false;
  public selectDeliveryTime = false;
  private unsubscribe$ = new Subject<void>();
  public productList: Product[] = [];
  public itemFormGroup: FormGroup;
  public sliceFormGroup: FormGroup;
  public commentFormGroup: FormGroup;
  public displayDeliveryForm = false;
  public userChoiceDataManagement = false;
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
    deliveryTime: [null],
    orderDate: [new Date(Date.now()), [Validators.required]],
    orderComment: [''],
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

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.tomorrow.setDate(new Date().getDate() + 1);

    this.itemFormGroup = this.fb.group({
      default: [''],
    });
    this.sliceFormGroup = this.fb.group({
      default: [''],
    });
    this.commentFormGroup = this.fb.group({
      default: [''],
    });
    this.orderService
      .getAllAvailableItems()
      .pipe(
        take(1),
        tap((resProdList) => {
          this.productList = resProdList.sort((a, b) =>
            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
          );
          this.itemFormGroup.removeControl('default');
          this.sliceFormGroup.removeControl('default');
          this.commentFormGroup.removeControl('default');
          resProdList.forEach((product) => {
            this.itemFormGroup?.addControl(product.name, new FormControl(null));
            this.sliceFormGroup?.addControl(
              product.name,
              new FormControl(null)
            );
            this.commentFormGroup?.addControl(
              product.name,
              new FormControl(null)
            );
          });
          this.getUserDataFromLocalStorage();
        })
      )
      .subscribe();

    combineLatest([
      this.itemFormGroup.valueChanges,
      this.sliceFormGroup.valueChanges,
      this.commentFormGroup.valueChanges,
    ])
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(([itemFormData, sliceFormData, commentFormData]) => {
          this.orderSummary = {
            products: Object.entries(itemFormData),
            sliced: Object.entries(sliceFormData),
            comments: Object.entries(commentFormData),
          };
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

  public specificDeliveryTime(checked: boolean): void {
    this.selectDeliveryTime = checked;
    if (this.selectDeliveryTime) {
      this.orderForm.get('deliveryTime')?.enable();
    } else {
      this.orderForm.get('deliveryTime')?.reset();
      this.orderForm.get('deliveryTime')?.disable();
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
    if (new Date(Date.now()).getHours() >= 18) {
      this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    }

    combineLatest([
      this.orderForm.get('deliveryDate')?.valueChanges as Observable<Date>,
      this.orderForm.get('orderDate')?.valueChanges as Observable<Date>,
    ])
      .pipe(
        tap(([deliveryDate, orderDate]) => {
          const orderTime = orderDate.getHours();
          const differenceIndays =
            (deliveryDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24);
          if (differenceIndays >= 1) {
            this.showDeliveryMessage = true;
            this.showShortDeliveryMessage = false;
            this.showOrderNeedValidationMessage = false;
            this.productList.forEach((product) => {
              if (!product.shortDelivery) {
                this.itemFormGroup.get(product.name)?.enable();
              }
            });
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
          } else if (orderTime < 11 && differenceIndays < 1) {
            this.showDeliveryMessage = true;
            this.showOrderNeedValidationMessage = false;
            this.productList.forEach((product) => {
              if (!product.shortDelivery) {
                this.showShortDeliveryMessage = true;
                this.itemFormGroup.get(product.name)?.disable();
              }
            });
          }
        })
      )
      .subscribe();
    this.orderForm.get('orderDate')?.updateValueAndValidity();
  }

  public onSubmit(): void {
    this.orderForm.get('orderDate')?.setValue(new Date(Date.now()));
    const orderList: OrderProduct[] = [];
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
    for (const [itemName, isSliced] of Object.entries(
      this.sliceFormGroup.value
    ) as [string, boolean][]) {
      if (isSliced) {
        const indexItem = orderList.findIndex((el) => el?.product === itemName);
        if (indexItem >= 0) {
          orderList[indexItem].isSliced = true;
        }
      }
    }
    for (const [itemName, comment] of Object.entries(
      this.commentFormGroup.value
    ) as [string, string][]) {
      if (comment && comment.length > 0) {
        const indexItem = orderList.findIndex((el) => el?.product === itemName);
        if (indexItem >= 0) {
          orderList[indexItem].comment = comment;
        }
      }
    }
    if (this.orderForm.valid && orderList.length > 0) {
      const finalOrder = {
        ...this.orderForm.value,
        order: orderList,
      };
      this.userDataManagement();
      this.orderService
        .addOrder(finalOrder)
        .pipe(take(1))
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
                window.location.reload();
              }),
              first()
            )
            .subscribe();
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

  public filterProductByCategory(category: ProductCategory): Product[] {
    return this.productList.filter((prod) => prod.category === category);
  }

  public onlySummerSunday = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    const month = (d || new Date()).getMonth();
    let res = true;
    if (day === 0 && (month > 8 || month < 5)) {
      res = false;
    }
    return res;
    // tslint:disable-next-line
  };

  private getUserDataFromLocalStorage(): void {
    const userData = localStorage.getItem('userBoulM');
    if (userData && userData.length > 0) {
      const userDataParsed: Order = JSON.parse(userData);
      this.userChoiceDataManagement = true;
      this.orderForm.get('name')?.setValue(userDataParsed.name);
      this.orderForm.get('phone')?.setValue(userDataParsed.phone);
      this.orderForm
        .get('address')
        ?.get('street')
        ?.setValue(userDataParsed.address.street);
      this.orderForm
        .get('address')
        ?.get('zipCode')
        ?.setValue(userDataParsed.address.zipCode);
      this.orderForm
        .get('address')
        ?.get('city')
        ?.setValue(userDataParsed.address.city);
      // Deactivated for the first implementation
      // userDataParsed.order.forEach((el) => {
      //   this.itemFormGroup.get(el.product)?.setValue(el.quantity);
      //   this.sliceFormGroup.get(el.product)?.setValue(el.isSliced);
      //   this.commentFormGroup.get(el.product)?.setValue(el.comment);
      // });
      if (userDataParsed.deliveryAddress) {
        this.orderForm.get('hasDifferentDeliveryAddress')?.setValue(true);
        this.hasDifferentDeliveryAddress(true);
        this.orderForm
          .get('deliveryAddress')
          ?.get('street')
          ?.setValue(userDataParsed.deliveryAddress.street);
        this.orderForm
          .get('deliveryAddress')
          ?.get('zipCode')
          ?.setValue(userDataParsed.deliveryAddress.zipCode);
        this.orderForm
          .get('deliveryAddress')
          ?.get('city')
          ?.setValue(userDataParsed.deliveryAddress.city);
      }
      if (userDataParsed.deliveryTime) {
        this.orderForm.get('selectDeliveryTime')?.setValue(true);
        this.specificDeliveryTime(true);
        this.orderForm
          .get('deliveryTime')
          ?.setValue(userDataParsed.deliveryTime);
      }
      if (userDataParsed.orderComment) {
        this.orderForm
          .get('orderComment')
          ?.setValue(userDataParsed.orderComment);
      }
    }
    localStorage.removeItem('haveSeenInfoBoulM');
  }

  private userDataManagement(): void {
    if (this.userChoiceDataManagement) {
      let userFormData = {
        name: this.orderForm.get('name')?.value,
        phone: this.orderForm.get('phone')?.value,
        address: {
          street: this.orderForm.get('address')?.get('street')?.value,
          zipCode: this.orderForm.get('address')?.get('zipCode')?.value,
          city: this.orderForm.get('address')?.get('city')?.value,
        },
      };
      if (this.displayDeliveryForm) {
        userFormData = {
          ...userFormData,
          ...{
            deliveryAddress: {
              street: this.orderForm.get('deliveryAddress')?.get('street')
                ?.value,
              zipCode: this.orderForm.get('deliveryAddress')?.get('zipCode')
                ?.value,
              city: this.orderForm.get('deliveryAddress')?.get('city')?.value,
            },
          },
        };
      }
      if (this.selectDeliveryTime) {
        userFormData = {
          ...userFormData,
          ...{ deliveryTime: this.orderForm.get('deliveryTime')?.value },
        };
      }
      localStorage.setItem('userBoulM', JSON.stringify(userFormData));
      // Deactivated on first implementation
      // localStorage.setItem('userBoulM', JSON.stringify({...userFormData, ...finalOrder}));
    } else {
      localStorage.removeItem('userBoulM');
    }
  }
}
