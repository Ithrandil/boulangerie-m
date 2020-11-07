import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormValidatedModalComponent } from './components/form-validated-modal/form-validated-modal.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [OrderFormComponent, FormValidatedModalComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [OrderService, { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
  exports: [OrderRoutingModule],
})
export class OrderModule {}
