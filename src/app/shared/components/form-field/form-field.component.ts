import {
  Component,
  OnInit,
  ContentChild,
  ChangeDetectorRef,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
} from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';

import { PrefixDirective } from '../../directives/prefix.directive';
import { SuffixDirective } from '../../directives/suffix.directive';
import { UnsubscribeDirective } from '@core/helpers/unsubscribe.directive';
import { FormInputComponent } from './form-input.component';
import { LabelComponent } from '../label/label.component';
import { ErrorComponent } from '../error/error.component';
import { HintComponent } from '../hint/hint.component';

/**
 * Displays a form field with styling.
 *
 * @example
 *  <app-form-field>
 *    <app-label>
 *      Email
 *    </app-label>
 *    <input appFormInput type="text"/>
 *  </app-form-field>
 */
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent extends UnsubscribeDirective implements OnInit, AfterContentInit {
  /** Prefix to show or hide html */
  @ContentChild(PrefixDirective)
  public prefix?: PrefixDirective;

  /** Prefix to show or hide html */
  @ContentChild(SuffixDirective)
  public suffix?: SuffixDirective;

  /** Input element inside form field component */
  @ContentChild(FormInputComponent, { static: true })
  public input?: FormInputComponent;

  /** Label element to show or hide html */
  @ContentChild(LabelComponent, { static: false })
  public label?: LabelComponent;

  /** Error elements to show or hide html */
  @ContentChildren(ErrorComponent, { descendants: true })
  public errors: QueryList<ErrorComponent> = new QueryList<ErrorComponent>();

  /** Hint elements to show or hide html */
  @ContentChildren(HintComponent, { descendants: true })
  public hints: QueryList<HintComponent> = new QueryList<HintComponent>();

  /** True if input is disabled */
  public isDisabled: boolean = false;
  /** True if input is focused */
  public isFocused: boolean = false;
  /** Input value */
  public value: string = '';
  /** Placeholder of input */
  public placeholder: string = '';

  /**
   * Constructor
   */
  constructor(private changes: ChangeDetectorRef) {
    super();
  }

  /**
   * Initializes component
   */
  public ngOnInit(): void {
    setTimeout(() => {
      this.updateInputStates();
    }, 0);
  }

  /**
   * Subscribe to input changes after content is initiated
   */
  public ngAfterContentInit(): void {
    if (this.input && this.input.stateChanges) {
      this.input.stateChanges.pipe(startWith(null), takeUntil(this.ngUnsubscribe)).subscribe((change) => {
        setTimeout(() => {
          this.updateInputStates();
        }, 0);
      });
    }

    if (this.input) {
      this.input.ngOnChanges();
    }
  }

  /**
   * Updates all variables
   */
  private updateInputStates(): void {
    if (!this.input) {
      return;
    }

    this.placeholder = this.input.placeholder;
    this.isDisabled = this.input.disabled;
    this.isFocused = this.input.focused;

    if (this.label) {
      this.label.setFor(this.input.id);
    }
    this.changes.markForCheck();
  }
}
