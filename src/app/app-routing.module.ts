import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { AdminGuard } from './auth/services/admin.guard';
import { MentionsLegalesComponent } from './core/pages/mentions-legales/mentions-legales.component';
import { OrderFormComponent } from './order/pages/order-form/order-form.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);
const redirectAlreadyLoggedIn = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path: '', redirectTo: 'commande', pathMatch: 'full' },
  { path: 'commande', component: OrderFormComponent, ...canActivate(redirectUnauthorizedToLogin), },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  {
    path: 'connexion',
    component: LoginPageComponent,
    ...canActivate(redirectAlreadyLoggedIn),
  },
  {
    path: 'inscription',
    component: RegisterPageComponent,
    ...canActivate(redirectAlreadyLoggedIn),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'compte',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: '**', redirectTo: 'commande' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
