import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take, tap } from 'rxjs';

enum buttonActionEnum {
  RESEND_EMAIL_VERIFICATION = "RESEND_EMAIL_VERIFICATION"
}
@Component({
  selector: 'app-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
})
export class TemplateModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, bodyText: string, buttonText?: string, buttonAction?: any }, private auth: AngularFireAuth) { }

  public buttonText: string = this.data.buttonText ? this.data.buttonText : "Fermer"
  ngOnInit(): void { }

  public buttonAction() {
    if (this.data.buttonAction) {
      if (buttonActionEnum.RESEND_EMAIL_VERIFICATION) {
        //TODO: voir pour externaliser pour le garder le plus agnostique possible avec un Function() peut être
        this.auth.user.pipe(take(1), tap(user => user?.sendEmailVerification())).subscribe();
      };
    }
  }
  public resendEmail() {
  }
}
