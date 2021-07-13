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

import { UnsubscribeDirective } from '../../helpers/unsubscribe.directive';

/**
 * The different types of input state changes
 */
export enum INPUT_STATE_CHANGE {
  blur = 'BLUR',
  focus = 'FOCUS',
  change = 'CHANGE',
  valueChange = 'VALUE_CHANGE',
  init = 'INIT',
}

let uniqueId = 0;

/**
 * Used to select inputs
 */
@Component({
  styleUrls: ['./form-input.component.scss'],
  template: `<ng-content></ng-content>`,
  // tslint:disable-next-line: component-selector
  selector: `
    input[type="text"][appFormInput],
    input[type="password"][appFormInput],
    input[type="number"][appFormInput],
    input[type="email"][appFormInput],
    input[appFormInput]`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent extends UnsubscribeDirective implements OnChanges, AfterViewInit {
  /** Stream that emits whenever the state of the input changes such that the wrapping `BevFormField` needs to run change detection. */
  public stateChanges: Subject<INPUT_STATE_CHANGE> = new Subject<INPUT_STATE_CHANGE>();

  /** Bind CSS-class */
  @HostBinding('class.ck-form-input')
  public defaultClass = true;

  /** Placeholder of input */
  @HostBinding('placeholder')
  @Input()
  public placeholder = '';

  /** Disabled status of input */
  @Input()
  @HostBinding('disabled')
  public disabled = false;

  /** Required status of input */
  @Input()
  @HostBinding('required')
  public required = false;

  /** Read-only status of input */
  @Input()
  @HostBinding('readonly')
  public readonly = false;

  /** Id of the input */
  @Input()
  @HostBinding('id')
  public id = `form-input-${uniqueId++}`;

  /** True if focused */
  public focused = false;

  /**
   * Handles blur of input
   */
  @HostListener('blur')
  public onBlur(): void {
    this.focused = false;
    this.stateChanges.next(INPUT_STATE_CHANGE.blur);
  }

  /**
   * Handles focus of input
   */
  @HostListener('focus')
  public onFocus(): void {
    this.focused = true;
    this.stateChanges.next(INPUT_STATE_CHANGE.focus);
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
    if (this.ngControl) {
      // Every value change is emitted
      this.ngControl.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
        this.stateChanges.next(INPUT_STATE_CHANGE.valueChange);
      });

      this.stateChanges.next(INPUT_STATE_CHANGE.init);
    }
  }

  /**
   * Emit value change
   */
  public ngOnChanges(changes?: SimpleChanges): void {
    if (changes) {
      this.stateChanges.next(INPUT_STATE_CHANGE.change);
    }
  }
}
