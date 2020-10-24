import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderService } from './order.service';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [CommonModule, OrderRoutingModule],
  providers: [OrderService],
  exports: [OrderRoutingModule],
})
export class OrderModule {}
