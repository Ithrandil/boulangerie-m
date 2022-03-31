import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/admin/services/product.service';
import { Product } from '@models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public productList$: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.productList$ = this.productService.getAllItems();
  }

  ngOnInit(): void { }
  public updateProductAvailability(
    productId: string,
    event: Event
  ): Observable<void> {
    const { checked } = event.target as HTMLInputElement;
    return this.productService.updateProductAvailability(
      productId,
      checked
    );
  }

  public updateProductShortDelivery(
    productId: string,
    event: Event
  ): Observable<void> {
    const { checked } = event.target as HTMLInputElement;
    return this.productService.updateProductShortDelivery(
      productId,
      checked
    );
  }

}
