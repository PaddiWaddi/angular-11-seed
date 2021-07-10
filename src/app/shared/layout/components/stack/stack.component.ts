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

  @HostBinding('class.space-small') get spaceSmall() {
    return this.space == Size.Small;
  }
  @HostBinding('class.space-medium') get spaceMedium() {
    return this.space == Size.Medium;
  }
  @HostBinding('class.space-large') get spaceLarge() {
    return this.space == Size.Large;
  }

  constructor() {}

  ngOnInit(): void {}
}
