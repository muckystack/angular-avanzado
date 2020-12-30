import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports: [IncrementadorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
