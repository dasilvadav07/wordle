import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './matrix.component';
import { RectModule } from '../rect/rect.module';



@NgModule({
  declarations: [
    MatrixComponent
  ],
  imports: [
    CommonModule,
    RectModule
  ],
  exports:[
    MatrixComponent
  ]
})
export class MatrixModule { }
