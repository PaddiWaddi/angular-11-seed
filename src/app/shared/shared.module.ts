import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULES: any[] = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
