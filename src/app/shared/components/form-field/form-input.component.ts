import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  HostBinding,
  Input,
  Component,
  HostListener,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges,
  Optional,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { UnsubscribeDirective } from '@core/helpers/unsubscribe.directive';

/**
 * The different types of input state changes
 */
export type INPUT_STATE_CHANGE = 'BLUR' | 'FOCUS' | 'CHANGE' | 'VALUE_CHANGE' | 'INIT';

let uniqueId = 0;

/**
 * Used to select inputs
 */
@Component({
  styleUrls: ['./form-input.component.scss'],
  template: `<ng-content></ng-content>`,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `
    input[type="text"][appFormInput],
    input[type="password"][appFormInput],
    input[type="number"][appFormInput],
    input[type="email"][appFormInput],
    input[appFormInput]`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent extends UnsubscribeDirective implements OnChanges, AfterViewInit {
  /** Stream that emits whenever the state of the input changes such that the wrapping `FormField` needs to run change detection. */
  public stateChanges: Subject<INPUT_STATE_CHANGE> = new Subject<INPUT_STATE_CHANGE>();

  /** Bind CSS-class */
  @HostBinding('class.ck-form-input')
  public defaultClass: boolean = true;

  /** Placeholder of input */
  @HostBinding('placeholder')
  @Input()
  public placeholder: string = '';

  /** Disabled status of input */
  @Input()
  @HostBinding('disabled')
  public disabled: boolean = false;

  /** Required status of input */
  @Input()
  @HostBinding('required')
  public required: boolean = false;

  /** Read-only status of input */
  @Input()
  @HostBinding('readonly')
  public readonly: boolean = false;

  /** Id of the input */
  @Input()
  @HostBinding('id')
  public id: string = `form-input-${uniqueId++}`;

  /** True if focused */
  public focused: boolean = false;

  /**
   * Handles blur of input
   */
  @HostListener('blur')
  public onBlur(): void {
    this.focused = false;
    this.stateChanges.next('BLUR');
  }

  /**
   * Handles focus of input
   */
  @HostListener('focus')
  public onFocus(): void {
    this.focused = true;
    this.stateChanges.next('FOCUS');
  }

  /**
   * Constructor
   */
  constructor(@Optional() private ngControl: NgControl, private elementRef: ElementRef) {
    super();
  }

  /**
   * Initializes the input after view initializing
   */
  public ngAfterViewInit(): void {
    if (!this.ngControl || !this.ngControl.valueChanges) {
      return;
    }

    // Every value change is emitted
    this.ngControl.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.stateChanges.next('VALUE_CHANGE');
    });

    this.stateChanges.next('INIT');
  }

  /**
   * Emit value change
   */
  public ngOnChanges(changes?: SimpleChanges): void {
    if (changes) {
      this.stateChanges.next('CHANGE');
    }
  }
}
