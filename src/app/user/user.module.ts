import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '@app/shared/shared.module';

import { InfosPersoComponent } from './pages/infos-perso/infos-perso.component';
import { PlaceSameOrderFormComponent } from './pages/place-same-order-form/place-same-order-form.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    InfosPersoComponent,
    UserOrdersComponent,
    PlaceSameOrderFormComponent
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
    MatPaginatorModule,
    MatDatepickerModule,

  ],
  providers: [UserService],
})
export class UserModule { }
