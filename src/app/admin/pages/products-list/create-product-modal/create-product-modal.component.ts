import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductCategoryWording, ProductUnitWording } from '@models/product';
import { ProductService } from '@app/admin/services/product.service';
import { take } from 'rxjs/operators';
import { TemplateModalComponent } from '@app/shared/components/info-modal/template-modal.component';
import { createModalConfig } from '@app/shared/utils/modalConfig-utils';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss'],
})
export class CreateProductModalComponent implements OnInit {
  public createProductForm!: FormGroup;
  public PRODUCTCATEGORYWORDING = Object.entries(ProductCategoryWording);
  public PRODUCTUNITWORDING = Object.entries(ProductUnitWording);

  public confirmCreateProductModal!: MatDialogRef<TemplateModalComponent>;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateProductModalComponent>,
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.createProductForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      price: [0, [Validators.required]],
      unit: ['', [Validators.required]],
      category: ['', [Validators.required]],
      available: [false, [Validators.required]],
      isBio: [false, [Validators.required]],
      isSliceable: [false, [Validators.required]],
    });
  }

  submit() {
    this.productService
      .createProduct(this.createProductForm.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogRef.close();
          this.confirmCreateProductModal = this.dialog.open(
            TemplateModalComponent,
            createModalConfig({
              title: 'Création réussie !',
              bodyText: `
              <p>Le nouveau produit a bien été créé.</p>
              `,
              buttonText: 'Ok',
              buttonAction: () => this.dialog.closeAll(),
            })
          );
        },
        error: () => {
          this.dialogRef.close();
          this.confirmCreateProductModal = this.dialog.open(
            TemplateModalComponent,
            createModalConfig({
              title: 'Oups !',
              bodyText: `
              <p>Quelque chose s'est mal passé, le nouveau produit n'a pas été créé. N'hésitez pas à en informer votre informaticien préféré!</p>
              `,
              buttonText: 'Ok',
              buttonAction: () => this.dialog.closeAll(),
            })
          );
        },
      });
  }

  updateProductAvailability(checked: boolean) {
    this.createProductForm.get('available')?.setValue(checked);
  }

  updateProductisBio(checked: boolean) {
    this.createProductForm.get('isBio')?.setValue(checked);
  }

  updateProductisSliceable(checked: boolean) {
    this.createProductForm.get('isSliceable')?.setValue(checked);
  }
}
