import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

const MODULES = [
  LayoutModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...MODULES
  ],
  exports:[
    ...MODULES
  ] 
})
export class SharedModule { }
