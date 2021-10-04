import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export type LoadingSpinnerColor = 'primary' | 'regular' | 'on-tint';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
  /** Color for the spinner */
  @Input() public color: LoadingSpinnerColor = 'regular';
}
