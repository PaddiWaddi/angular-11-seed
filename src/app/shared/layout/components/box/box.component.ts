import { ElementRef, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, OnChanges } from '@angular/core';
import { ResponsiveInput, ResponsiveProperty, Size } from '../../models';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent implements OnChanges {
  @Input() public padding: ResponsiveInput<Size> = Size.None;

  @Input() public paddingLeft?: ResponsiveInput<Size>;
  @Input() public paddingRight?: ResponsiveInput<Size>;
  @Input() public paddingBottom?: ResponsiveInput<Size>;
  @Input() public paddingTop?: ResponsiveInput<Size>;

  private shorthandProps: { [prop: string]: string[] } = {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  };

  @ViewChild('container', { static: true })
  private containerRef?: ElementRef;

  constructor(private renderer: Renderer2) {}

  public ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).forEach((prop) => {
      if (prop in this.shorthandProps) {
        this.shorthandProps[prop].forEach((p) => {
          if (!(p in changes)) {
            this.containerRef &&
              this.renderer.addClass(this.containerRef.nativeElement, `${p}-${changes[prop].currentValue}`);
          }
        });
      } else {
        this.containerRef &&
          this.renderer.addClass(this.containerRef.nativeElement, `${prop}-${changes[prop].currentValue}`);
      }
    });
  }
}
