import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PrefixDirective } from './directives/prefix.directive';
import { SuffixDirective } from './directives/suffix.directive';

const MODULES = [FontAwesomeModule];

const COMPONENTS = [
  ButtonComponent,
  // ErrorComponent,
  // FormFieldComponent,
  // HeadlineComponent,
  // HintComponent,
  // LabelComponent,
  LoadingSpinnerComponent,
  // PageComponent,
  // PageContentComponent,
  // SegmentComponent,
  // SegmentedControlComponent,
  // TextComponent,
  // TitleComponent,
];

const DIRECTIVES = [PrefixDirective, SuffixDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
