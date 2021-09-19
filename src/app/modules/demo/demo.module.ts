import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  declarations: [DemoComponent, ColorsComponent],
  providers: [],
  imports: [CommonModule, DemoRoutingModule, SharedModule, FontAwesomeModule],
})
export class DemoModule {}
