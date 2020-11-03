import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AdminRoutingModule } from './admin-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { OrderListService } from './services/order-list.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductsListComponent, OrderListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
  ],
  exports: [AdminRoutingModule],
  providers: [ProductService, OrderListService],
})
export class AdminModule {}
