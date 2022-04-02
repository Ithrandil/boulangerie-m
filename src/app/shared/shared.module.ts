import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseComponent } from './components/collapse/collapse.component';



@NgModule({
  declarations: [
    CardComponent,
    CollapseComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CardComponent,
    CollapseComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
