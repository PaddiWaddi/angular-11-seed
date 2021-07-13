import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

/**
 * Displays a single segment. Only use inside SegmentedControlComponent
 */
@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentComponent<T> {
  /** Value of the segment. Used as a return value for selection */
  @Input()
  public value: T;

  /** Raises when the selection changes */
  @Output()
  public selectionChanged = new EventEmitter<{ selection: boolean; value: T }>();

  /** Wether this segment is selected */
  @HostBinding('class.isSelected')
  public selected: boolean;

  /** Set is selected an raise event */
  public set isSelected(value: boolean) {
    if (value !== this.selected) {
      this.selected = value;
      this.selectionChanged.emit({ selection: value, value: this.value });
    }
  }

  /** Get isSelected */
  public get isSelected(): boolean {
    return this.selected;
  }

  /** Toggle selection on click */
  @HostListener('click')
  public toggle() {
    this.isSelected = !this.isSelected;
  }

  /** Toggle selection on click */
  @HostListener('keydown.enter')
  private select() {
    this.isSelected = true;
  }

  /**
   * Sets the selected property safely
   * @param value value to set isSelected to
   * @param emitChange wether or not to emit a change event. Defaults to false
   */
  public setSelected(value: boolean, emitChange?: boolean) {
    if (emitChange) {
      this.isSelected = value;
    } else {
      this.selected = value;
    }
  }
}
