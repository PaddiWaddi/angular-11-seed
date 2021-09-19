import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { DialogService } from './components/dialog/dialog.service';
import { MessageDialogComponent } from './components/dialog/message-dialog/message-dialog.component';
import { OverlayComponent } from './components/dialog/overlay.component';
import { ErrorComponent } from './components/error/error.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormInputComponent } from './components/form-field/form-input.component';
import { HintComponent } from './components/hint/hint.component';
import { LabelComponent } from './components/label/label.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { PrefixDirective } from './directives/prefix.directive';
import { SuffixDirective } from './directives/suffix.directive';

const MODULES: any[] = [OverlayModule, A11yModule];

const COMPONENTS = [
  ButtonComponent,
  ErrorComponent,
  FormFieldComponent,
  FormInputComponent,
  OverlayComponent,
  MessageDialogComponent,
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
  imports: [CommonModule, FontAwesomeModule, ...MODULES],
  providers: [DialogService],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
