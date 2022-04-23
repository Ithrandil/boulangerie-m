import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModalComponent } from './components/info-modal/template-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
        MatProgressSpinnerModule
    ],
    exports: [
        TemplateModalComponent,
        CommonModule,
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class SharedModule { }
