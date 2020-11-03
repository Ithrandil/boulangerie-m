import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'liste-commandes', pathMatch: 'full' },
  { path: 'produits', component: ProductsListComponent },
  { path: 'liste-commandes', component: OrderListComponent },
  { path: 'liste-commandes/:orderId', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
