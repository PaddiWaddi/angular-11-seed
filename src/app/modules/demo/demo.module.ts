import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DemoComponent],
  providers: [],
  imports: [CommonModule, DemoRoutingModule, SharedModule, FontAwesomeModule],
})
export class DemoModule {}
