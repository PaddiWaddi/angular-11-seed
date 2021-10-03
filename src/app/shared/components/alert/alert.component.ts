import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  /** Defines the intention of the alert and color scheme */
  @Input()
  public style: 'default' | 'danger' | 'warning' | 'success' | 'primary' = 'default';
}
