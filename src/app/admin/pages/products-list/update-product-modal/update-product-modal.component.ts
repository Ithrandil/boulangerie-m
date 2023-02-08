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
  public confirmUpdateProductModal!: MatDialogRef<TemplateModalComponent>;

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
          this.confirmUpdateProductModal = this.dialog.open(
            TemplateModalComponent,
            createModalConfig({
              title: 'Mise à jour réussie réussie !',
              bodyText: `
              <p>Le produit a bien été mis à jour.</p>
              `,
              buttonText: 'Ok',
              buttonAction: () => {
                this.dialog.closeAll();
              },
            })
          );
        },
        error: () => {
          this.dialogRef.close();
          this.confirmUpdateProductModal = this.dialog.open(
            TemplateModalComponent,
            createModalConfig({
              title: 'Oups !',
              bodyText: `
              <p>Quelque chose s'est mal passé, le produit n'a pas été mis à jour. N'hésitez pas à en informer votre informaticien préféré!</p>
              `,
              buttonText: 'Ok',
              buttonAction: () => this.dialog.closeAll(),
            })
          );
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
          this.productService
            .deleteProduct(this.product.productId)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.confirmDeleteProductModal = this.dialog.open(
                  TemplateModalComponent,
                  createModalConfig({
                    title: 'Tchao',
                    bodyText: `
              <p>Le produit a bien été supprimé!</p>
              `,
                    buttonText: 'Ok',
                    buttonAction: () => this.dialog.closeAll(),
                  })
                );
              },
              error: () => {
                this.confirmDeleteProductModal = this.dialog.open(
                  TemplateModalComponent,
                  createModalConfig({
                    title: 'Oups !',
                    bodyText: `
              <p>Quelque chose s'est mal passé, le produit n'a pas été supprimé. N'hésitez pas à en informer votre informaticien préféré!</p>
              `,
                    buttonText: 'Ok',
                    buttonAction: () => this.dialog.closeAll(),
                  })
                );
              },
            });
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
