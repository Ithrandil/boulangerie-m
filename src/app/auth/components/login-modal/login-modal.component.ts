import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  public loginErrorMessage = '';
  public resetPasswordErrorMessage = '';
  public forgottenPassword = false;
  public title = this.forgottenPassword ? 'Mot de passe oublié' : 'Connexion';
  public loginForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  public resetPasswordForm = this.fb.group({
    email: [null, [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private dialog: MatDialog
  ) {}

  public login(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.router.navigate(['/commande']);
            this.dialog.closeAll();
          },
          error: (err) => {
            if (err.code === 'auth/wrong-password') {
              this.loginErrorMessage =
                'Mauvais e-mail ou mot de passe, veuillez réessayer.';
            } else {
              this.loginErrorMessage =
                'Une erreur est survenue, veuillez réessayer plus tard. ' +
                err.message;
            }
          },
        });
    }
  }

  public resetUserPassword(): void {
    if (this.resetPasswordForm.valid) {
      this.authService
        .resetUserPassword(this.resetPasswordForm.value.email)
        .pipe(take(1))
        .subscribe({
          next: () => {
            window.location.reload();
          },
          error: (err) => {
            this.resetPasswordErrorMessage =
              'Une erreur est survenue, veuillez réessayer plus tard. ' +
              err.message;
          },
        });
    }
  }

  public goToRegister() {
    this.router.navigate(['/inscription']);
    this.dialog.closeAll();
  }
}
