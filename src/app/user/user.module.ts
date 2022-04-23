import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { UserService } from './services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { InfosPersoComponent } from './pages/infos-perso/infos-perso.component';
import { MatIconModule } from '@angular/material/icon';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    InfosPersoComponent,
    UserOrdersComponent
  ],
  imports: [
    UserRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatExpansionModule,

  ],
  providers: [UserService],
})
export class UserModule { }
