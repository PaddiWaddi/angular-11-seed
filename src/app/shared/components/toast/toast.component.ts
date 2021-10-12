import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import { ToastRef } from './toast-ref';

/**
 * A small actionable notification
 */
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  @Input()
  public toast!: ToastRef;

  @Output()
  public dismiss: EventEmitter<null> = new EventEmitter();

  /** Icons to use in template */
  public Icons: typeof Icons = Icons;

  constructor() {}

  public onClose(): void {
    this.dismiss.emit();
  }
}
