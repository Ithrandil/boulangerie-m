import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TemplateModalComponent } from './components/info-modal/template-modal.component';
import { ListRecapProductsComponent } from './components/list-recap-products/list-recap-products.component.';

@NgModule({
  declarations: [TemplateModalComponent, ListRecapProductsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  exports: [
    TemplateModalComponent,
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    ListRecapProductsComponent,
  ],
})
export class SharedModule {}
