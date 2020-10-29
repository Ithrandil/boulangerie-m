import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { OrderRoutingModule } from './order-routing.module';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [OrderService],
  exports: [OrderRoutingModule],
})
export class OrderModule {}
