import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalConfigData } from '@models/modalConfig';

@Component({
  selector: 'app-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
})
export class TemplateModalComponent {
  constructor(
    private dialogRef: MatDialogRef<TemplateModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ModalConfigData
  ) {}

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
