import { Component } from '@angular/core';
import { ProductService } from '@app/admin/services/product.service';
import {
  Product,
  ProductCategory,
  ProductCategoryWording,
  ProductUnit,
  ProductUnitWording,
} from '@models/product';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateProductModalComponent } from '@app/admin/pages/products-list/update-product-modal/update-product-modal.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  public productList: Product[] = [];
  public PRODUCTUNIT = ProductUnit;
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTCATEGORY = ProductCategory;
  public PRODUCTCATEGORYWORDING = Object.entries(ProductCategoryWording);

  public updateProductModal!: MatDialogRef<UpdateProductModalComponent>;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {
    this.productService
      .getAllItems()
      .pipe(take(1))
      .subscribe({
        next: (allProducts: Product[]) => (this.productList = allProducts),
      });
  }
  // TODO: refacto car coppié collé du order form
  public findProductCategoryWording(category: ProductCategory): string {
    return this.PRODUCTCATEGORYWORDING.find((el) => el[0] === category)![1];
  }
  public filterProductByCategory(category: ProductCategory): Product[] {
    return this.productList.filter((prod) => prod.category === category);
  }
  //
  public openUpdateProductModal(product: Product) {
    this.updateProductModal = this.dialog.open(UpdateProductModalComponent, {
      data: { ...product },
      disableClose: true,
      width: '400px',
      maxWidth: '90%',
    });
  }
}
