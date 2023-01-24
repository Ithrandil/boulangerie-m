import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductionTeamRecapComponent } from './pages/production-team-recap/production-team-recap.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RecapMensuelAdminComponent } from './pages/recap-mensuel-admin/recap-mensuel-admin.component';
import { RecapUtilisateurMensuelComponent } from './pages/recap-utilisateur-mensuel/recap-utilisateur-mensuel.component';
import { AdminPageFormComponent } from '@app/admin/pages/admin-page/admin-page-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'liste-commandes', pathMatch: 'full' },
  { path: 'produits', component: ProductsListComponent },
  { path: 'liste-commandes', component: OrderListComponent },
  { path: 'recap-production', component: ProductionTeamRecapComponent },
  { path: 'gestion-site', component: AdminPageFormComponent },
  { path: 'recap-global-mensuel', component: RecapMensuelAdminComponent },
  {
    path: 'recap-utilisateur-mensuel/:userId',
    component: RecapUtilisateurMensuelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
