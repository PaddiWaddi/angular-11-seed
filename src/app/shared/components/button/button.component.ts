import { Component, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { SuffixDirective } from '@shared/directives/suffix.directive';
import { PrefixDirective } from '@shared/directives/prefix.directive';
import { faIcons, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  /** Color scheme to use */
  @Input()
  public color: 'regular' | 'primary' = 'regular';

  /** Button style */
  @Input()
  public style: 'regular' | 'text' = 'regular';

  /** Wether the button can be clicked */
  @HostBinding('class.pointer-events-none')
  @Input()
  public disabled: boolean = false;

  /** Shows a loading indicator */
  @Input()
  public loadingStatus: LoadingState = LoadingState.Rest;

  /** Icon Suffix */
  @ContentChild(SuffixDirective)
  public suffix?: SuffixDirective;

  /** Icon prefix */
  @ContentChild(PrefixDirective)
  public prefix?: PrefixDirective;

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
    this.loadingStatus = status;
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
