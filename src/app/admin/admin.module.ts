import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductionTeamRecapComponent } from './pages/production-team-recap/production-team-recap.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { OrderAdminService } from './services/order-admin.service';
import { ProductService } from './services/product.service';
import { OpeningDaysFormComponent } from './pages/opening-days-form/opening-days-formcomponent';
import { OpeningDaysService } from './services/opening-days.service';

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
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [AdminRoutingModule],
  providers: [ProductService, OrderAdminService, OpeningDaysService],
})
export class AdminModule {}
