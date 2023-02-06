import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Product,
  ProductCategoryWording,
  ProductUnitWording,
} from '@models/product';
import { ProductService } from '@app/admin/services/product.service';
import { take } from 'rxjs/operators';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { createModalConfig } from '@app/shared/utils/modalConfig-utils';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.scss'],
})
export class UpdateProductModalComponent implements OnInit {
  public updateProductForm!: FormGroup;
  public PRODUCTCATEGORYWORDING = Object.entries(ProductCategoryWording);
  public PRODUCTUNITWORDING = Object.entries(ProductUnitWording);

  public confirmDeleteProductModal!: MatDialogRef<TemplateModalComponent>;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<UpdateProductModalComponent>,
    private fb: FormBuilder,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA)
    public product: Product
  ) {}

  ngOnInit(): void {
    this.updateProductForm = this.fb.group({
      name: [this.product.name, [Validators.required]],
      description: [this.product.description ? this.product.description : null],
      price: [this.product.price, [Validators.required]],
      unit: [this.product.unit, [Validators.required]],
      category: [this.product.category, [Validators.required]],
      available: [this.product.available, [Validators.required]],
      isBio: [this.product.isBio, [Validators.required]],
      isSliceable: [this.product.isSliceable, [Validators.required]],
    });
  }

  submit() {
    this.productService
      .updateProduct(this.product.productId, this.updateProductForm.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          this.dialogRef.close();
        },
      });
  }

  delete() {
    this.confirmDeleteProductModal = this.dialog.open(
      TemplateModalComponent,
      createModalConfig({
        title: 'Êtes vous sûre?',
        bodyText: `
              <p>Attention, vous allez supprimer un produit. Cette action est irreversible!</p>
              <p>Êtes vous sûre de vouloir supprimer ce produit?</p>
              `,
        buttonText: 'Oui, supprimer ce produit',
        buttonAction: () => {
          // TODO: faire la supopression du produit
          this.dialog.closeAll();
        },
        buttonColor: 'warning',
        extraCloseButton: true,
        extraCloseButtonText: 'Annuler',
      })
    );
  }

  updateProductAvailability(checked: boolean) {
    this.updateProductForm.get('available')?.setValue(checked);
  }

  updateProductisBio(checked: boolean) {
    this.updateProductForm.get('isBio')?.setValue(checked);
  }

  updateProductisSliceable(checked: boolean) {
    this.updateProductForm.get('isSliceable')?.setValue(checked);
  }
}
