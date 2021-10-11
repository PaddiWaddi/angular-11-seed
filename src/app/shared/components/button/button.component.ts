import {
  Component,
  Input,
  ContentChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { SuffixDirective } from '@shared/directives/suffix.directive';
import { PrefixDirective } from '@shared/directives/prefix.directive';
import { faIcons, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const buttonStyles = ['filled-primary', 'filled-neutral', 'filled-danger', 'text-neutral'] as const;

export type ButtonStyle = typeof buttonStyles[number];

/**
 * Button component
 */
@Component({
  selector: 'button[app-button],a[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /** Button style */
  @Input()
  public style: ButtonStyle = 'filled-neutral';

  /** Button Size */
  @Input()
  public size: 's' | 'm' | 'l' = 'm';

  /** Wether the button can be clicked */
  @HostBinding('class.pointer-events-none')
  @Input()
  public disabled: boolean = false;

  /** Shows a loading indicator */
  @Input()
  public loadingState?: LoadingState = LoadingState.Rest;

  /** Icon Suffix */
  @ContentChild(SuffixDirective)
  public suffix?: SuffixDirective;

  /** Icon prefix */
  @ContentChild(PrefixDirective)
  public prefix?: PrefixDirective;

  /** True if focused */
  public focused: boolean = false;

  /**
   * Handles blur of input
   */
  @HostListener('blur')
  public onBlur(): void {
    this.focused = false;
  }

  /**
   * Handles focus of input
   */
  @HostListener('focus')
  public onFocus(): void {
    this.focused = true;
  }

  // TEMPLATE REFERENCES

  /** Icon reference to use in template */
  public faIcons: IconDefinition = faIcons;

  /**
   * Constructor
   */
  constructor(private cd: ChangeDetectorRef) {}

  /**
   * Set the loading status to the given value
   * @param status Desired button status
   */
  public setStatus(status: LoadingState): void {
    this.loadingState = status;
    this.cd.markForCheck();
  }
}

/** Button Status type */
export enum LoadingState {
  Rest = 'rest',
  Loading = 'loading',
  Error = 'error',
  Success = 'success',
}
