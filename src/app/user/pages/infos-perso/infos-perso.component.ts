import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { FormUtils } from '@app/shared/utils/form-utils';
import { UserService } from '@app/user/services/user.service';
import { FormErrorMessages } from '@models/formErrorMessages';
import { User } from '@models/user';
import { take } from 'rxjs';

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss'],
})
export class InfosPersoComponent {
  public userInformations!: User;
  public updatingInfos = false;
  public displayDeliveryForm = false;

  public infosPersosForm = this.fb.group({
    name: [this.userInformations?.name, [Validators.required]],
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
  public getErrorMessage = FormUtils.GetErrorMessage;
  public errorMessages: FormErrorMessages = {
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
    }
  };
  public updateValidationModal!: MatDialogRef<TemplateModalComponent>;

  constructor(private fb: FormBuilder, private userService: UserService, private dialog: MatDialog
  ) {
    this.userService.getUserInfos()
      .subscribe(
        user => {
          this.userInformations = user;
          this.infosPersosForm.get('name')?.setValue(this.userInformations.name);
          this.infosPersosForm.get('phone')?.setValue(this.userInformations.phone);
          this.infosPersosForm.get('address')?.get('street')?.setValue(this.userInformations.address.street);
          this.infosPersosForm.get('address')?.get('zipCode')?.setValue(this.userInformations.address.zipCode);
          this.infosPersosForm.get('address')?.get('city')?.setValue(this.userInformations.address.city);
          if (this.userInformations.deliveryAddress) {
            this.displayDeliveryForm = true;
            this.infosPersosForm.get('hasDifferentDeliveryAddress')?.setValue(true);
            this.infosPersosForm.get('deliveryAddress')?.get('street')?.setValue(this.userInformations.address.street);
            this.infosPersosForm.get('deliveryAddress')?.get('zipCode')?.setValue(this.userInformations.address.zipCode);
            this.infosPersosForm.get('deliveryAddress')?.get('city')?.setValue(this.userInformations.address.city);

          }
          this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
        }
      )
  }

  public hasDifferentDeliveryAddress(checked: boolean): void {
    this.displayDeliveryForm = checked;
    if (this.displayDeliveryForm) {
      this.infosPersosForm.get('deliveryAddress')?.enable();
    } else {
      this.infosPersosForm.get('deliveryAddress')?.disable();
    }
  }

  public submitUpdateInfos() {
    if (this.infosPersosForm.valid) {
      this.userService.updateUserInformations(this.infosPersosForm.value, this.userInformations.firebaseUid).pipe(take(1)).subscribe(() => {
        this.updatingInfos = false;
        this.updateValidationModal = this.dialog.open(TemplateModalComponent, {
          data: {
            title: "Mise à jour effectuée!",
            bodyText: `
            <p>Vos informations ont bien été mises à jour.</p>
            <p>Elles seront prises en compte pour toutes vos futures commandes.</p>
            `
          },
          disableClose: true,
          width: '400px',
          maxWidth: '90%',
        });
      });
    }
  }

}
