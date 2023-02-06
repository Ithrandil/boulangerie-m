import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { OpeningDaysFormComponent } from './pages/admin-page/opening-days-form/opening-days-form.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ProductionTeamRecapComponent } from './pages/production-team-recap/production-team-recap.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RecapMensuelAdminComponent } from './pages/recap-mensuel-admin/recap-mensuel-admin.component';
import { RecapUtilisateurMensuelComponent } from './pages/recap-utilisateur-mensuel/recap-utilisateur-mensuel.component';
import { OpeningDaysService } from './services/opening-days.service';
import { OrderAdminService } from './services/order-admin.service';
import { ProductService } from './services/product.service';
import { RecapMensuelService } from './services/recap-mensuel-service';
import { MatInputModule } from '@angular/material/input';
import { CustomMessageFormComponent } from '@app/admin/pages/admin-page/custom-message-form/custom-message-form.component';
import { AdminPageFormComponent } from '@app/admin/pages/admin-page/admin-page-form.component';
import { UpdateProductModalComponent } from '@app/admin/pages/products-list/update-product-modal/update-product-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ProductsListComponent,
    OrderListComponent,
    ProductionTeamRecapComponent,
    OpeningDaysFormComponent,
    RecapMensuelAdminComponent,
    RecapUtilisateurMensuelComponent,
    CustomMessageFormComponent,
    AdminPageFormComponent,
    UpdateProductModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatListModule,
    SharedModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [AdminRoutingModule],
  providers: [
    ProductService,
    OrderAdminService,
    OpeningDaysService,
    RecapMensuelService,
  ],
})
export class AdminModule {}
