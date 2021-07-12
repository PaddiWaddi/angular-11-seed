import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Size } from '../../models/';

@Component({
  selector: 'stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  @Input()
  public space: Size = Size.None;

  @HostBinding('class.space-xx-small') get spaceXXSmall(): boolean {
    return this.space === Size.XXSmall;
  }
  @HostBinding('class.space-x-small') get spaceXSmall(): boolean {
    return this.space === Size.XSmall;
  }
  @HostBinding('class.space-small') get spaceSmall(): boolean {
    return this.space === Size.Small;
  }
  @HostBinding('class.space-medium') get spaceMedium(): boolean {
    return this.space === Size.Medium;
  }
  @HostBinding('class.space-large') get spaceLarge(): boolean {
    return this.space === Size.Large;
  }
  @HostBinding('class.space-x-large') get spaceXLarge(): boolean {
    return this.space === Size.XLarge;
  }
  @HostBinding('class.space-xx-large') get spaceXXLarge(): boolean {
    return this.space === Size.XXLarge;
  }

  constructor() {}

  ngOnInit(): void {}
}
