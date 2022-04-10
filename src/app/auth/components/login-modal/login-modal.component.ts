import { Component, OnInit } from '@angular/core';
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
export class LoginModalComponent implements OnInit {
  public loginErrorMessage = '';
  public resetPasswordErrorMessage = '';
  public forgottenPassword = false;
  public title = this.forgottenPassword ? "Mot de passe oublié" : "Connexion";
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
  ) { }

  ngOnInit(): void { }

  public login(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe(take(1))
        .subscribe({
          next: () => {
            // TODO: revoir la redirection après implémentation compte utilisateur
            this.router.navigate(['admin']);
            this.dialog.closeAll();
          },
          error: (err) => {
            // TODO: faire une vrai gestion d'erreur en fr, voir l'api
            this.loginErrorMessage = err.message;
          }
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
            // TODO: voir pour de l'ux mieux
          },
          error: (err) => {
            // TODO: faire une vrai gestion d'erreur en fr, voir l'api
            this.resetPasswordErrorMessage = err.message;
          }
        });
    }
  }
}
