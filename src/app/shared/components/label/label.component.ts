import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

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
  public for?: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  /**
   * Set the for value programmatically, and triggers change detection
   * @param for the value to set for to
   */
  public setFor(value: string): void {
    if (this.for === value) {
      return;
    }
    this.for = value;

    this.cdRef.markForCheck();
  }
}
