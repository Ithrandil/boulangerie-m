import { NgModule } from '@angular/core';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { OrderFormComponent } from './order/pages/order-form/order-form.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);
const redirectAlreadyLoggedIn = () => redirectLoggedInTo(['admin']);

const routes: Routes = [
  { path: '', redirectTo: 'commande', pathMatch: 'full' },
  { path: 'commande', component: OrderFormComponent },
  {
    path: 'connexion',
    component: LoginPageComponent,
    ...canActivate(redirectAlreadyLoggedIn),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  // { path: '404', component: PageNotFoundPage },
  // { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
