import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AdminRoutingModule } from './admin-routing.module';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { OrderListService } from './services/order-list.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductsListComponent,
    OrderListComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
  ],
  exports: [AdminRoutingModule],
  providers: [ProductService, OrderListService],
})
export class AdminModule {}
