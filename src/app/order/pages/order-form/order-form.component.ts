import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OpeningDaysService } from '@app/admin/services/opening-days.service';
import { FormValidatedModalComponent } from '@app/order/components/form-validated-modal/form-validated-modal.component';
import { DateUtils } from '@app/shared/utils/date.utils';
import { FormUtils } from '@app/shared/utils/form-utils';
import { UserService } from '@app/user/services/user.service';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Order, OrderProduct, OrderSummary } from '@models/order';
import { Product, ProductCategory } from '@models/product';
import { combineLatest, Observable, Subject } from 'rxjs';
import { first, switchMap, take, takeUntil, tap } from 'rxjs/operators';

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
  // FIXME: TYPE MOI BORDEL
  public closingDays: {
    rangeId: string;
    startingDate: any;
    endingDate: any;
  }[] = [];
  public PRODUCTCATEGORY = ProductCategory;
  public tomorrow = new Date();
  public minimalDay = new Date();
  public filterDaysAfterToday = DateUtils.FilterDaysAfterToday;
  public orderDays = DateUtils.OrderDays;
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
    // FIXME: prévenir Nico que les deux jours minimum va empecher les utilisateurs de passer commande pour le mardi
    // car c'est maintenant deux jours OUVRES, du coup si ils commandent le dimanche, ils pourront passer que pour le jeudi!!!
    // Appeler Aymeric ou Aymeric demain la dessus!
    // QUID de la livraison en date courte? j'enleve tout vu que maintenant c'est 2 jours minimum, c'est plus possible de commander pour le lendemain!


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
      .subscribe((res) => {
        this.closingDays = res;
        // this.closingDays = [
        //   // { rangeId: "MARDI31MAIMINUT", startingDate: { seconds: 1653948000 }, endingDate: { seconds: 1653948000 } },
        //   // { rangeId: "LUNDI30MAIMINUIT", startingDate: { seconds: 1653861600 }, endingDate: { seconds: 1653861600 } },
        //   { rangeId: "DATEINFERIEURPOURTESTFILTRAGE", startingDate: { seconds: 1639263600 }, endingDate: { seconds: 1639263600 } }
        // ];
        // RAJOUT DE LUNDI FERME
        // this.closingDays.push({ rangeId: "LUNDI30MAIMINUIT", startingDate: { seconds: 1653861600 }, endingDate: { seconds: 1653861600 } })
        // RAJOUT DE MARDI FERME
        // this.closingDays.push({ rangeId: "MARDI31MAIMINUT", startingDate: { seconds: 1653948000 }, endingDate: { seconds: 1653948000 } })
        this.closingDays = this.orderDays(this.closingDays);
        this.closingDays = this.filterDaysAfterToday(this.closingDays);
        this.setMinimalDay();

        // TODO: DEMOCK MOI ENCULER
        // .subscribe((res) => {
        // this.closingDays = res;
        //   this.closingDays = this.orderDays(this.closingDays);
        // this.closingDays = this.filterDaysAfterToday(this.closingDays);
        // this.setMinimalDay();
      });
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

  private setMinimalDay() {
    /**
     * IMPLEMENTATION FINALE PROPRE
     */
    // Set à minuit
    this.minimalDay.setHours(0, 0, 0, 0);
    // Set à dans deux jours, délai minimum de livraison
    this.minimalDay.setDate(new Date().getDate() + 2);
    // Si on est samedi entre octobre et mai inclus, on tombe le lundi mais le dimanche n'est pas ouvré donc on rajoute un jours
    if (this.minimalDay.getDay() === 1 && (this.minimalDay.getMonth() > 8 || this.minimalDay.getMonth() < 5)) {
      this.minimalDay.setDate(this.minimalDay.getDate() + 1);
    }
    // Si le jour minimum de livraison est un dimanche entre octobre et mai inclus, c'est fermé, on rajoute un jour
    if (this.minimalDay.getDay() === 0 && (this.minimalDay.getMonth() > 8 || this.minimalDay.getMonth() < 5)) {
      this.minimalDay.setDate(this.minimalDay.getDate() + 1);
    }
    // Si un des jours de fermeture est prévu avant le jour minimum de livraison on rajoute un jour
    this.closingDays.forEach(closedDay => {
      if (closedDay.startingDate.seconds * 1000 <= this.minimalDay.getTime()) {
        this.minimalDay.setDate(this.minimalDay.getDate() + 1);
      }
    })
    /**
     * *****************************
     */


    // let numberOfDelayDays: number = 2;
    // const tempMinimalDay: Date = new Date();
    // tempMinimalDay.setHours(0, 0, 0, 0)

    // console.log("numberOfDelayDays", numberOfDelayDays)

    // console.log("tempMinimalDay avant incrément => AUJOURD'HUI", tempMinimalDay.getDay())

    // tempMinimalDay.setDate(new Date().getDate() + 2);

    // console.log("tempMinimalDay après incrément 2 jrs => APRES DEMAIN", tempMinimalDay.getDay())



    // // VERSION TEST EN ETANT VENDREDI et donc livraison possible dimanche (même si jour bloqué sur calendrier)

    // tempMinimalDay.setDate(tempMinimalDay.getDate() - 1);
    // console.log("on est dimanche?", tempMinimalDay)

    // // Si le jour est un dimanche entre juin et septembre il faut rajouter un jour de plus
    // if (tempMinimalDay.getDay() === 0 && (tempMinimalDay.getMonth() > 8 || tempMinimalDay.getMonth() < 5)) {
    //   console.log("ON rentre bien dedans")
    //   numberOfDelayDays++;
    //   tempMinimalDay.setDate(tempMinimalDay.getDate() + 1);

    //   console.log("du coup pour vendredi, livraison possible le lundi uniquement", tempMinimalDay)
    //   console.log("numberOfDelayDays", numberOfDelayDays)
    // }

    // // FAIRE une boucle pour savoir si le prochain jour normalement commandable est fermé
    // // closing days => millisecondes depuis 1er janvier 1970 (EN UTC (a prendre en compte ou pas?????????????))
    // console.log(this.closingDays)


    // // MOCK de this.closingDays pour avoir lundi prochain fermé
    // let lundiProchain = new Date();
    // lundiProchain.setDate(new Date().getDate() + 2)
    // let mockedClosingDay = [{ startingDate: { seconds: 1653948000 }, endingDate: { seconds: 1653948000 } }, { startingDate: { seconds: 1653861600 }, endingDate: { seconds: 1653861600 } }, { startingDate: { seconds: 1639263600 }, endingDate: { seconds: 1639263600 } }]
    // console.log("avant filtrage", mockedClosingDay)
    // mockedClosingDay = this.formatAndFilterClosingDatesForList(mockedClosingDay)
    // console.log("apres filtrage", mockedClosingDay)

    // while (mockedClosingDay.find(closedDay =>
    //   closedDay.startingDate.seconds * 1000 <= tempMinimalDay.getTime() &&
    //   closedDay.endingDate.seconds * 1000 >= tempMinimalDay.getTime()
    // )) {
    //   numberOfDelayDays++;
    //   tempMinimalDay.setDate(tempMinimalDay.getDate() + 1);
    // }

    // // if (mockedClosingDay.find(closedDay =>
    // //   closedDay.startingDate.seconds * 1000 <= tempMinimalDay.getTime() &&
    // //   closedDay.endingDate.seconds * 1000 >= tempMinimalDay.getTime()
    // // )) {
    // //   numberOfDelayDays++;
    // //   tempMinimalDay.setDate(tempMinimalDay.getDate() + 1);
    // // }
    // console.log("closedDay.startingDate.seconds * 1000", mockedClosingDay[0].startingDate.seconds * 1000)
    // console.log("tempMinimalDay.getTime()", tempMinimalDay.getTime())
    // console.log("tempMinimalDay.getTime()", tempMinimalDay)

    // TODO: il faut aussi tester  les closing day sur des périodes si ca fonctionne

    // VERSION ACTUELLE + 2 JOURS

    // this.minimalDay.setDate(new Date().getDate() + 2);
    // // SI dimanche dans les deux jours entre juin et septembre inclus rajouter un jour
    // // SI jours feriés / fermés issu de la bdd, rajouter ces jours

    // if (new Date(Date.now()).getHours() >= 18) {
    //   this.minimalDay.setDate(this.minimalDay.getDate() + 1);
    // }
    /**
    * SE SERVIR DE CETTE LOGIQUE POUR ENLEVER LES JOURS FERMES DANS LE DELAI
    * // Sunday open only between june and september included
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
    */
  }

  // TODO: EN FAIRE UN UTILS CAR JE VAIS MEN SERVIR AUSSI DANS ORDER FORM
  // private formatAndFilterClosingDatesForList(
  //   array: { startingDate: any; endingDate: any }[]
  //   // PAS BESOIN DU RANGEID AVEC LE MOCK
  //   // array: { rangeId: string; startingDate: any; endingDate: any }[]
  //   // ): { rangeId: string; startingDate: any; endingDate: any }[] {
  // ): { startingDate: any; endingDate: any }[] {
  //   return array
  //     .sort((el1, el2) => {
  //       if (el1.startingDate.seconds < el2.startingDate.seconds) {
  //         return -1;
  //       }
  //       if (el1.startingDate.seconds > el2.startingDate.seconds) {
  //         return 1;
  //       }
  //       return 0;
  //     })
  //     .filter((el) => el.startingDate.seconds > Math.floor(Date.now() / 1000))
  //   // TODO:FAIRE UNE DEUXIEME METHODE POUR CA POUR POUVOIR REUTILISER
  //   // .map((el) => {
  //   //   return {
  //   //     // rangeId: el.rangeId,
  //   //     startingDate: el.startingDate.toDate(),
  //   //     endingDate:
  //   //       el.startingDate.seconds === el.endingDate.seconds
  //   //         ? null
  //   //         : el.endingDate.toDate(),
  //   //   };
  //   // });
  // }
}

