import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

/**
 * Displays a headline
 */
@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineComponent {
  /** Level of the headline to be created */
  @Input()
  public level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
}
