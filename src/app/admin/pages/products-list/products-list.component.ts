import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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

  ngOnInit(): void {}
  // TODO: TOUTES LES REQUETES FAITES DANS L'ESPACE ADMIN DOIVENT DEMANDER UN TOKEN AUTH
  // POUR ETRE SECURISE, LE GUARD NEST PAS UNE SECURITE EN ELLE MEME
  public updateProductAvailability(
    productId: string,
    event: MatSlideToggleChange
  ): Observable<void> {
    return this.productService.updateProductAvailability(
      productId,
      event.checked
    );
  }

  public updateProductShortDelivery(
    productId: string,
    event: MatSlideToggleChange
  ): Observable<void> {
    return this.productService.updateProductShortDelivery(
      productId,
      event.checked
    );
  }
}
