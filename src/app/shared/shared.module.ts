import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { ErrorComponent } from './components/error/error.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { HintComponent } from './components/hint/hint.component';
import { LabelComponent } from './components/label/label.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { PageComponent } from './components/page/page.component';
import { SegmentComponent } from './components/segment/segment.component';
import { SegmentedControlComponent } from './components/segmented-control/segmented-control.component';
import { TextComponent } from './components/text/text.component';
import { TitleComponent } from './components/title/title.component';
import { PrefixDirective } from './directives/prefix.directive';
import { SuffixDirective } from './directives/suffix.directive';

const MODULES: [] = [];

const COMPONENTS = [
  ButtonComponent,
  ErrorComponent,
  FormFieldComponent,
  HeadlineComponent,
  HintComponent,
  LabelComponent,
  LoadingSpinnerComponent,
  PageComponent,
  PageContentComponent,
  SegmentComponent,
  SegmentedControlComponent,
  TextComponent,
  TitleComponent,
];

const DIRECTIVES = [PrefixDirective, SuffixDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
