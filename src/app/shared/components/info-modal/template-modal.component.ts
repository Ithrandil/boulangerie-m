import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
})
export class TemplateModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TemplateModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { title: string, bodyText: string, buttonText?: string, buttonAction?: Function }) { }

  public buttonText: string = this.data.buttonText ? this.data.buttonText : "Fermer"
  ngOnInit(): void { }

  public buttonAction() {
    if (this.data.buttonAction) {
      this.data.buttonAction();
      setTimeout(() => {
        this.dialogRef.close();
      }, 500);
    } else {
      this.dialogRef.close();
    }
  }

}
