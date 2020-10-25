import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [CommonModule, OrderRoutingModule],
  providers: [OrderService],
  exports: [OrderRoutingModule],
})
export class OrderModule {}
