import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { UserService } from './services/user.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,

  ],
  exports: [UserRoutingModule],
  providers: [UserService],
})
export class UserModule { }
