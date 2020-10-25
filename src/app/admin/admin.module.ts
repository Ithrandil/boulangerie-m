import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminRoutingModule],
  providers: [ProductService],
})
export class AdminModule {}
