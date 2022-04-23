import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { UserService } from './services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { InfosPersoComponent } from './pages/infos-perso/infos-perso.component';
import { MatIconModule } from '@angular/material/icon';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';


@NgModule({
  declarations: [
    InfosPersoComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,

    // MatExpansionModule,
    // MatDividerModule,
    // MatProgressSpinnerModule,
  ],
  // exports: [UserRoutingModule],
  providers: [UserService],
})
export class UserModule { }
