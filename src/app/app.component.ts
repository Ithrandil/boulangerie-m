import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import firebase from 'firebase/compat/app';
import { tap, first } from 'rxjs/operators';
import { TemplateModalComponent } from './shared/components/info-modal/template-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isConnected!: firebase.User | null;
  public activatedRoute = '';
  public resendEmailVerificationEmailModal!: MatDialogRef<TemplateModalComponent>;

  constructor(
    public router: Router,
    public authService: AuthService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {
    this.authService
      .isUserAuthenticated()
      .pipe(
        tap((user) => {
          this.isConnected = user;
          if (this.isConnected && !user?.emailVerified) {
            // TODO: il existe un pipe email verified import { emailVerified } from '@angular/fire/compat/auth-guard';
            // TODO: voir pour changer le lien dans l'email de validation vers une view (ou je rajoute un bouton ensuite pour être propre)
            this.resendEmailVerificationEmailModal = this.dialog.open(TemplateModalComponent, {
              data: {
                title: "Email non vérifié",
                bodyText: `
                <p>Votre compte a bien été créé mais vous n'avez pas validé votre email.</p>
                <p>Vous avez normalement reçu un mail de confirmation avec un lien sur lequel cliquer pour finaliser votre création de compte.</p>
                <p>Pensez à vérifier vos spams!</p>
                <p>Si vous n'avez pas reçu l'email, vous pouvez en redemander un autre en cliquant sur le bouton ci dessous.</p>
                `,
                buttonText: "Renvoyer un email",
                buttonAction: "RESEND_EMAIL_VERIFICATION"
              },
              disableClose: true,
              width: '400px',
              maxWidth: '90%',
            });
            this.resendEmailVerificationEmailModal
              .afterClosed()
              .pipe(
                tap(() => {
                  // TODO:rename
                  this.logoutAdminSpace();
                }),
                first()
              )
              .subscribe();
          }
        })
      )
      .subscribe();
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logos/facebook-circular-logo.svg'
      )
    );
  }
  public logoutAdminSpace(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
  public onActivate(): void {
    this.activatedRoute = this.router.routerState.snapshot.url;
  }
}
