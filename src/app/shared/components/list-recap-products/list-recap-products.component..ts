import { Component, Input } from '@angular/core';
import { OrderProduct } from '@models/order';
import { ProductUnit, ProductUnitWording } from '@models/product';

@Component({
  selector: 'app-list-recap-products',
  templateUrl: './list-recap-products.component.html',
})
export class ListRecapProductsComponent {
  public PRODUCTUNITWORDING = ProductUnitWording;
  public PRODUCTUNIT = ProductUnit;
  @Input() allUserOrdersProducts: OrderProduct[] = [];
  constructor() {}
}
