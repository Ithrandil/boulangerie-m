import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { AdminRoutingModule } from './admin-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { OrderAdminService } from './services/order-admin.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductsListComponent, OrderListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [AdminRoutingModule],
  providers: [ProductService, OrderAdminService],
})
export class AdminModule {}
