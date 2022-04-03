import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModalComponent } from './components/info-modal/template-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
    declarations: [
        TemplateModalComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        TemplateModalComponent
    ]
})
export class SharedModule { }
