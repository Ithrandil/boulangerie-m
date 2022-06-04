import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { AdminRoutingModule } from './admin-routing.module';
import { OpeningDaysFormComponent } from './pages/opening-days-form/opening-days-formcomponent';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductionTeamRecapComponent } from './pages/production-team-recap/production-team-recap.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { OpeningDaysService } from './services/opening-days.service';
import { OrderAdminService } from './services/order-admin.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductsListComponent,
    OrderListComponent,
    ProductionTeamRecapComponent,
    OpeningDaysFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatListModule,
  ],
  exports: [AdminRoutingModule],
  providers: [ProductService, OrderAdminService, OpeningDaysService],
})
export class AdminModule { }
