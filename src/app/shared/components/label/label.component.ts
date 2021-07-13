import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Label element
 */
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  /** For html attribute to attach this to input elements */
  @Input()
  public for: string;
}
