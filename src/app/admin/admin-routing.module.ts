import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningDaysFormComponent } from './pages/opening-days-form/opening-days-formcomponent';

import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductionTeamRecapComponent } from './pages/production-team-recap/production-team-recap.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'liste-commandes', pathMatch: 'full' },
  { path: 'produits', component: ProductsListComponent },
  { path: 'liste-commandes', component: OrderListComponent },
  { path: 'recap-production', component: ProductionTeamRecapComponent },
  { path: 'gestion-fermeture', component: OpeningDaysFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
