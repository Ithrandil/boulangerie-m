import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { DateUtils } from '@app/shared/utils/date.utils';
import { FormUtils } from '@app/shared/utils/form-utils';
import { UserService } from '@app/user/services/user.service';
import { ClosingDay } from '@models/closingDay';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Order, OrderProduct, OrderSummary } from '@models/order';
import {
  Product,
  ProductCategory,
  ProductCategoryWording,
  ProductUnit,
  ProductUnitWording,
} from '@models/product';
import { combineLatest, Subject } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';

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
  public customMessage: string = '';
  public closingDays: ClosingDay[] = [];
  public PRODUCTCATEGORY = ProductCategory;
  public PRODUCTCATEGORYWORDING = Object.entries(ProductCategoryWording);
  public PRODUCTUNIT = ProductUnit;
  public PRODUCTUNITWORDING = ProductUnitWording;
  public tomorrow = new Date();
  public minimalDay = new Date();
  public filterDaysAfterToday = DateUtils.FilterDaysAfterToday;
  public orderDays = DateUtils.OrderDays;
  public IsItOpenToday = DateUtils.IsItOpenToday;
  public setMinimalDay = DateUtils.SetMinimalDay;
  public validatedModal!: MatDialogRef<TemplateModalComponent>;
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

  // FIXME: REMOVE AFTER 28/11/2022
  public temporaryModal!: MatDialogRef<TemplateModalComponent>;

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

    this.openingDaysService
      .getAllClosingDays()
      .pipe(take(1))
      .subscribe((res) => {
        this.closingDays = res;
        this.closingDays = this.orderDays(this.closingDays);
        this.closingDays = this.filterDaysAfterToday(this.closingDays);
        this.minimalDay = this.setMinimalDay(this.minimalDay, this.closingDays);
      });

    // FIXME: REMOVE ME AFTER 28/11/2022
    this.temporaryModal = this.dialog.open(TemplateModalComponent, {
      data: {
        title: 'La boulangerie fait peau neuve!',
        bodyText: `
            <p>Encore un peu de patience.</p>
            <p>A bientôt</p>
            `,
      },
      disableClose: true,
      width: '400px',
      maxWidth: '90%',
    });
    /****************************** */
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
      this.userService
        .getUserInfos()
        .pipe(
          take(1),
          switchMap((userInfos) => {
            let finalOrderWithUserInfos: Order = {
              ...finalOrder,
              name: userInfos.name,
              phone: userInfos.phone,
              address: userInfos.address,
              firebaseUid: userInfos.firebaseUid,
            };
            if (
              userInfos.hasDifferentDeliveryAddress &&
              userInfos.deliveryAddress
            ) {
              finalOrderWithUserInfos = {
                ...finalOrderWithUserInfos,
                hasDifferentDeliveryAddress:
                  userInfos.hasDifferentDeliveryAddress,
                deliveryAddress: userInfos.deliveryAddress,
              };
            }
            return this.orderService.addOrder(finalOrderWithUserInfos);
          })
        )
        .subscribe({
          next: () => {
            this.validatedModal = this.dialog.open(TemplateModalComponent, {
              data: {
                title: 'Votre commande a été validée.',
                bodyText: `
              <p>La boulangerie M vous remercie de votre commande.</p>
              <p>En espérant vous revoir très prochainement et que votre commande vous satisfera pleinement.</p>
              `,
                buttonAction: () => window.location.reload(),
              },
              disableClose: true,
              width: '400px',
              maxWidth: '90%',
            });
          },
          error: (err) => {
            this.validatedModal = this.dialog.open(TemplateModalComponent, {
              data: {
                title: 'Oups',
                bodyText: `
            <p>Une erreur a eu lieu la confirmation de votre commande, veuillez réessayer plus tard ou contacter la boulangerie directement. ${err}</p>
            `,
              },
              disableClose: true,
              width: '400px',
              maxWidth: '90%',
            });
          },
        });
    }
  }

  public filterProductByCategory(category: ProductCategory): Product[] {
    return this.productList.filter((prod) => prod.category === category);
  }

  public findProductCategoryWording(category: ProductCategory): string {
    return this.PRODUCTCATEGORYWORDING.find((el) => el[0] === category)![1];
  }

  public isItOpenToday = (d: Date | null): boolean => {
    return this.IsItOpenToday(d, this.closingDays);
  };
}
