import { Component, OnDestroy } from '@angular/core';
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
import { takeUntil } from 'rxjs/operators';
import { CreateProductModalComponent } from '@app/admin/pages/products-list/create-product-modal/create-product-modal.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnDestroy {
  public productList: Product[] = [];
  public PRODUCTUNIT = ProductUnit;
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTCATEGORY = ProductCategory;
  public PRODUCTCATEGORYWORDING = Object.entries(ProductCategoryWording);

  public updateProductModal!: MatDialogRef<UpdateProductModalComponent>;
  public createProductModal!: MatDialogRef<CreateProductModalComponent>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {
    this.productService
      .getAllItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (allProducts: Product[]) => (this.productList = allProducts),
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
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
  public openCreateProductModal() {
    this.createProductModal = this.dialog.open(CreateProductModalComponent, {
      disableClose: true,
      width: '400px',
      maxWidth: '90%',
    });
  }
}
