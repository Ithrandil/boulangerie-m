import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderFormComponent } from './pages/order-form/order-form.component';

const routes: Routes = [{ path: '', component: OrderFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
