import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectComponent } from './rect.component';



@NgModule({
  declarations: [RectComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RectComponent
  ]
})
export class RectModule { }
