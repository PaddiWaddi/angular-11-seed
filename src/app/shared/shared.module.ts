import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { OverlayService } from './components/dialog/overlay.service';
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
import { DialogService } from './components/dialog/dialog.service';
import { CardComponent } from './components/card/card.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastListComponent } from './components/toast/toast-list.component';
import { ToastService } from './components/toast/toast.service';

const MODULES: any[] = [OverlayModule, A11yModule];

const COMPONENTS = [
  AlertComponent,
  ButtonComponent,
  CardComponent,
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
  ToastComponent,
  ToastListComponent,
];

const SERVICES = [OverlayService, DialogService, ToastService];

const DIRECTIVES = [PrefixDirective, SuffixDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, FontAwesomeModule, ...MODULES],
  providers: [SERVICES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
