import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderService } from '../order.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  public productList: Observable<Product[]>;

  constructor(private orderService: OrderService) {
    this.productList = this.orderService.getAllAvailableItems();
  }

  ngOnInit(): void {}
}
