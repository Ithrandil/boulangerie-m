import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { FormValidatedModalComponent } from '@app/order/components/form-validated-modal/form-validated-modal.component';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Order, OrderProduct, OrderSummary } from '@models/order';
import { Product, ProductCategory } from '@models/product';
import { combineLatest, Observable, Subject } from 'rxjs';
import { first, take, takeUntil, tap, switchMap } from 'rxjs/operators';

import { OrderService } from './../../services/order.service';

import { FormUtils } from '@app/shared/utils/form-utils';
import { UserService } from '@app/user/services/user.service';
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
  // FIXME: TYPE MOI BORDEL
  public closingDays: {
    rangeId: string;
    startingDate: any;
    endingDate: any;
  }[] = [];
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
  public orderForm = this.fb.group({
    deliveryDate: [null, [Validators.required]],
    deliveryTime: [null],
    orderDate: [new Date(Date.now()), [Validators.required]],
    orderComment: [''],
    totalPrice: [0, [Validators.required]],
  });
  public getErrorMessage = FormUtils.GetErrorMessage;
  public errorMessages: FormErrorMessages = {
    deliveryDate: {
      required: 'Date de livraison obligatoire',
      matDatepickerMin: 'Date incorrecte',
    },
  };

  constructor(
    private orderService: OrderService,
    private openingDaysService: OpeningDaysService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private userService: UserService
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

    this.filterShortDeliveryProducts();
    this.openingDaysService
      .getAllClosingDays()
      .pipe(take(1))
      .subscribe((res) => (this.closingDays = res));
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
      this.userService.getUserInfos().pipe(
        take(1),
        switchMap(userInfos => {
          let finalOrderWithUserInfos: Order = {
            ...finalOrder,
            name: userInfos.name,
            phone: userInfos.phone,
            address: userInfos.address,
            firebaseUid: userInfos.firebaseUid
          }
          if (userInfos.hasDifferentDeliveryAddress && userInfos.deliveryAddress) {
            finalOrderWithUserInfos = {
              ...finalOrderWithUserInfos,
              hasDifferentDeliveryAddress: userInfos.hasDifferentDeliveryAddress,
              deliveryAddress: userInfos.deliveryAddress
            };
          }
          return this.orderService.addOrder(finalOrderWithUserInfos)
        })
      ).subscribe(() => {
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

  public filterProductByCategory(category: ProductCategory): Product[] {
    return this.productList.filter((prod) => prod.category === category);
  }

  public isItOpenToday = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    const month = (d || new Date()).getMonth();
    let res = true;
    // Sunday open only between june and september included
    if (day === 0 && (month > 8 || month < 5)) {
      res = false;
    }
    // get and inject specific closed day from closing days form
    if (
      d &&
      this.closingDays.find(
        (el) =>
          el.startingDate.seconds * 1000 <= d?.getTime() &&
          el.endingDate.seconds * 1000 >= d?.getTime()
      )
    ) {
      res = false;
    }
    return res;
  };
}
