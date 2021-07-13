import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
  HostListener,
  SimpleChanges,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SegmentComponent } from '../segment/segment.component';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeDirective } from '@shared/helpers/unsubscribe.directive';

/**
 * Control that works like a radio group with options where only one can be chosen.
 */
@Component({
  selector: 'app-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedControlComponent<T> extends UnsubscribeDirective implements AfterContentInit, OnChanges {
  /** Raises when the selected control changes */
  @Output()
  public selectionChanged = new EventEmitter<{ value: T; index: number }>();

  /** Value of the selected segment */
  @Input()
  public selectedIndex: number;

  /** Available segments */
  @ContentChildren(SegmentComponent, { descendants: true })
  public segments: QueryList<SegmentComponent<T>>;

  /**
   * Initiate subscriptions to child state changes
   */
  public ngAfterContentInit(): void {
    if (!this.segments) {
      return;
    }

    this.wireSubscriptions(this.segments.toArray());

    this.segments.changes
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.wireSubscriptions(this.segments.toArray()));
  }

  /** Get focus state */
  @HostListener('keydown.arrowup')
  @HostListener('keydown.arrowright')
  public cycleUp() {
    this.selectSegment(this.selectedIndex + 1);
  }

  /** Get focus state */
  @HostListener('keydown.arrowdown')
  @HostListener('keydown.arrowleft')
  public cycleDown() {
    this.selectSegment(this.selectedIndex - 1);
  }

  /**
   * React to input changes
   */
  public ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.selectedIndex) {
      this.selectSegment(changes?.selectedIndex?.currentValue);
    }
  }

  /**
   * Create subscriptions for each segment
   */
  private wireSubscriptions(segments: SegmentComponent<T>[]) {
    let selected;

    segments.forEach((segment, index) => {
      const s = segment.selectionChanged
        .pipe(takeUntil(this.ngUnsubscribe), takeUntil(this.segments.changes))
        .subscribe((sel) => {
          segments.forEach((seg) => seg.setSelected(false));

          segment.setSelected(true);
          this.selectedIndex = index;

          this.selectionChanged.emit({
            value: segment.value,
            index,
          });
        });

      if (index === this.selectedIndex) {
        segment.setSelected(true);
      }
      if (this.selectedIndex === undefined) {
        selected = segment.isSelected ? index : undefined;
      }
    });

    this.selectedIndex = this.selectedIndex || selected;
    if (this.selectedIndex === undefined && segments.length) {
      segments[0].setSelected(true);
      this.selectedIndex = 0;
    }
  }

  /**
   * Selects the segment with the given index
   * @param index Segment index to select
   */
  private selectSegment(index: number): void {
    if (!this.segments?.length) {
      return;
    }

    index = index >= this.segments.length ? 0 : index < 0 ? this.segments.length - 1 : index;

    const s = this.segments.toArray()[index];

    if (!s) {
      return;
    }

    s.setSelected(true, true);
  }
}
