import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@app/shared/shared.module';

import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdminGuard } from './services/admin.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginModalComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule
  ],
  providers: [AuthService, AdminGuard],
})
export class AuthModule { }
