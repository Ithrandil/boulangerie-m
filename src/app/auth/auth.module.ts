import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthService } from './services/auth.service';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LoginModalComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    SharedModule
  ],
  providers: [AuthService],
})
export class AuthModule { }
