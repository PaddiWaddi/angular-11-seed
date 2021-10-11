import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UnsubscribeDirective } from '@core/helpers/unsubscribe.directive';
import { takeUntil } from 'rxjs/operators';
import { ToastListRef } from '../toast-list-ref';

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastListComponent extends UnsubscribeDirective implements OnInit {
  constructor(public toastRef: ToastListRef) {
    super();
  }

  ngOnInit(): void {}
}
