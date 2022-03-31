import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '@app/shared/shared.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { FormValidatedModalComponent } from './components/form-validated-modal/form-validated-modal.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { MondayStartWeekDateAdapter } from './services/mondayStartWeekDateAdapter.service';
import { OrderSummaryPipe } from './services/order-summary.pipe';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    OrderFormComponent,
    FormValidatedModalComponent,
    OrderSummaryPipe,
  ],
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
    NgxMaterialTimepickerModule,
    SharedModule
  ],
  providers: [
    OrderService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: DateAdapter, useClass: MondayStartWeekDateAdapter },
  ],
  exports: [OrderRoutingModule],
})
export class OrderModule { }
