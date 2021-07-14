import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

/**
 * Structural component that provides basic fit for page content and honors safe area insets left and right
 */
@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContentComponent {
  /** Does not apply max width */
  @Input()
  @HostBinding('class.flexible')
  public flexible: boolean = false;
}
