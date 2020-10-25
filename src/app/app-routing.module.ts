import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderFormComponent } from './order/pages/order-form/order-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'commande', pathMatch: 'full' },
  { path: 'commande', component: OrderFormComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  // { path: '404', component: PageNotFoundPage },
  // { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
