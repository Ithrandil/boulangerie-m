import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
})
export class TemplateModalComponent {
  constructor(
    private dialogRef: MatDialogRef<TemplateModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      bodyText: string;
      buttonText?: string;
      buttonAction?: Function;
      extraCloseButton?: boolean;
    }
  ) {}

  public buttonText: string = this.data.buttonText
    ? this.data.buttonText
    : 'Fermer';
  public extraCloseButton: boolean = this.data.extraCloseButton
    ? this.data.extraCloseButton
    : false;

  public buttonAction() {
    if (this.data.buttonAction) {
      this.data.buttonAction();
      setTimeout(() => {
        this.dialogRef.close();
      }, 1000);
    } else {
      this.dialogRef.close();
    }
  }
}
