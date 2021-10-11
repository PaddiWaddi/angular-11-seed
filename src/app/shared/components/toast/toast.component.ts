import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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
export class ToastComponent implements OnInit {
  @Input()
  public toast!: ToastRef;

  /** Icons to use in template */
  public Icons: typeof Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
