import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { ErrorComponent } from './components/error/error.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormInputComponent } from './components/form-field/form-input.component';
import { HintComponent } from './components/hint/hint.component';
import { LabelComponent } from './components/label/label.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { PrefixDirective } from './directives/prefix.directive';
import { SuffixDirective } from './directives/suffix.directive';

const MODULES = [FontAwesomeModule];

const COMPONENTS = [
  ButtonComponent,
  ErrorComponent,
  FormFieldComponent,
  FormInputComponent,
  // HeadlineComponent,
  HintComponent,
  LabelComponent,
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
