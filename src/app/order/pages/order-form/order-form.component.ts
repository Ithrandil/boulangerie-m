import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormErrorMessages } from '@models/formErrorMessages';
import { Product } from '@models/product';
import { Observable } from 'rxjs';

import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  public productList$: Observable<Product[]>;
  public orderForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    street: ['', [Validators.required]],
    zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    city: ['', [Validators.required]],
  });
  private errorMessages: FormErrorMessages = {
    name: {
      required: 'Nom de votre entreprise obligatoire',
    },
    phone: {
      required: 'Numéro de téléphone obligatoire',
      pattern: 'Doit contenir 10 chiffres',
    },
    street: {
      required: 'Rue obligatoire',
    },
    zipCode: {
      required: 'Code postal obligatoire',
      pattern: 'Doit contenir 5 chiffres',
    },
    city: {
      required: 'Ville obligatoire',
    },
  };

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.productList$ = this.orderService.getAllAvailableItems();
  }

  ngOnInit(): void {}

  getErrorMessage(controlName: string): string {
    const errors = [];
    if (this.orderForm.get(controlName)?.hasError('required')) {
      return this.errorMessages[controlName].required;
    }
    if (this.orderForm.get(controlName)?.errors) {
      for (const key of Object.keys(
        this.orderForm.get(controlName)?.errors as {}
      )) {
        errors.push(this.errorMessages[controlName][key]);
      }
    }
    return errors.join(', ');
  }
}
