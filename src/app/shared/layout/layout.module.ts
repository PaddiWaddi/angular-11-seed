import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './components/stack/stack.component';
import { TextComponent } from './components/text/text.component';
import { DividerComponent } from './components/divider/divider.component';
import { BoxComponent } from './components/box/box.component';

const COMPONENTS = [StackComponent, TextComponent, DividerComponent, BoxComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
