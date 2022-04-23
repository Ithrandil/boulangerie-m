import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosPersoComponent } from './pages/infos-perso/infos-perso.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';


const routes: Routes = [
  { path: '', redirectTo: 'infos', pathMatch: 'full' },
  { path: 'infos', component: InfosPersoComponent },
  { path: 'mes-commandes', component: UserOrdersComponent },
  // { path: 'liste-commandes', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
