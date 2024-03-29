import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { FormUtils } from '@app/shared/utils/form-utils';
import { ValidatePassword } from '@app/shared/utils/validate-password';
import { FormErrorMessages } from '@models/formErrorMessages';
import { first, take, tap } from 'rxjs';
import { createModalConfig } from '@app/shared/utils/modalConfig-utils';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public errorMessage = '';
  private regexPassword = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#\$%\^&\*]).{8,}$/g
  );

  public registerForm = this.fb.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this.regexPassword)],
      ],
      confirmPassword: [
        '',
        [Validators.required, Validators.pattern(this.regexPassword)],
      ],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
        city: ['', [Validators.required]],
      }),
    },
    {
      validators: [
        ValidatePassword.MatchPassword('password', 'confirmPassword'),
      ],
    }
  );
  public getErrorMessage = FormUtils.GetErrorMessage;
  public errorMessages: FormErrorMessages = {
    email: {
      required: 'Email obligatoire',
      pattern: 'Doit avoir le format email',
    },
    password: {
      required: 'Mot de passe obligatoire',
      pattern:
        'Doit contenir 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un de ces caractères spéciaux !@#$%^&*',
    },
    confirmPassword: {
      required: 'Confirmation du mot de passe obligatoire',
      pattern:
        'Doit contenir 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un de ces caractères spéciaux !@#$%^&*',
      matchPassword: 'Doit être identique au mot de passe',
    },
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
  public registerValidationModal!: MatDialogRef<TemplateModalComponent>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    public router: Router
  ) {}

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.registerValidationModal = this.dialog.open(
              TemplateModalComponent,
              createModalConfig({
                title: 'Félicitations!',
                bodyText: `
            <p>Votre compte a bien été créé.</p>
            <p>Vous allez recevoir un email, veuillez suivre le lien pour valider votre compte.</p>
            <p>N'hésitez pas à nous contacter si vous rencontrez un problème.</p>
            `,
              })
            );
            this.registerValidationModal
              .afterClosed()
              .pipe(
                first(),
                tap(() => {
                  this.authService.logout();
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                })
              )
              .subscribe();
          },
          error: (error) => {
            if (error.code === 'auth/email-already-in-use') {
              this.errorMessage =
                'Il semblerait que cet e-mail est déjà utilisé, veuillez vous connecter.';
            } else {
              window.alert(
                "Une erreur s'est produit, veuillez réessayer plus tard." +
                  error.message
              );
            }
          },
        });
    }
  }
}
