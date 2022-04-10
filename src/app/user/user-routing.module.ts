import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosPersoComponent } from './pages/infos-perso/infos-perso.component';


const routes: Routes = [
  { path: '', redirectTo: 'infos', pathMatch: 'full' },
  { path: 'infos', component: InfosPersoComponent },
  // { path: 'liste-commandes', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
