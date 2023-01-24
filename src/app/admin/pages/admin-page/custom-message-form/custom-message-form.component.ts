import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomMessageService } from '@app/admin/services/custom-message.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-custom-message-form',
  templateUrl: './custom-message-form.component.html',
  styleUrls: ['./custom-message-form.component.scss'],
})
export class CustomMessageFormComponent implements OnInit {
  public customerMessageForm!: FormGroup;
  private messageData: any;

  constructor(
    private fb: FormBuilder,
    private customMessageService: CustomMessageService
  ) {}

  ngOnInit() {
    this.customerMessageForm = this.fb.group({
      message: [null, [Validators.required]],
      showMessage: [null],
    });
    this.getLastCustomMessage();
  }

  updateShowCustomMessage(checked: boolean): void {
    this.customerMessageForm.get('showMessage')?.setValue(checked);
    this.customMessageService.updateShowCustomMessage(
      checked,
      this.messageData.messageId
    );
  }

  public onSubmitMessageCustomer() {
    this.customerMessageForm.markAllAsTouched();
    if (this.customerMessageForm.valid) {
      this.customMessageService
        .createOrUpdateCustomMessage(this.customerMessageForm.value)
        .pipe(take(1))
        .subscribe();
    }
  }

  public getLastCustomMessage() {
    this.customMessageService
      .getCurrentCustomMessage()
      .pipe(take(1))
      .subscribe((messageData) => {
        if (messageData) {
          this.messageData = messageData;
          this.customerMessageForm
            .get('message')
            ?.setValue(messageData.message);
          this.customerMessageForm
            .get('showMessage')
            ?.setValue(messageData.showMessage);
        }
      });
  }
}
