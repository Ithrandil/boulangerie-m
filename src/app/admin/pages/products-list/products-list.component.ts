import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ProductService } from '@app/admin/services/product.service';
import { Product, ProductUnit, ProductUnitWording } from '@models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  public productList$: Observable<Product[]>;
  public PRODUCTUNIT = ProductUnit;
  public PRODUCTUNITWORDING = ProductUnitWording;
  constructor(private productService: ProductService) {
    this.productList$ = this.productService.getAllItems();
  }

  public updateProductAvailability(
    productId: string,
    event: MatSlideToggleChange
  ): Observable<void> {
    return this.productService.updateProductAvailability(
      productId,
      event.checked
    );
  }
  public updateProductisBio(
    productId: string,
    event: MatSlideToggleChange
  ): Observable<void> {
    return this.productService.updateProductisBio(productId, event.checked);
  }
}
