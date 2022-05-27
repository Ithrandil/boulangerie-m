import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TemplateModalComponent } from './components/info-modal/template-modal.component';

// FIXME: repasser sur tout les modules pour supprimer les doublons!

@NgModule({
    declarations: [
        TemplateModalComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDividerModule
    ],
    exports: [
        TemplateModalComponent,
        CommonModule,
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDividerModule
    ]
})
export class SharedModule { }
