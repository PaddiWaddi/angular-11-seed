import { Subject } from 'rxjs';
import { ToastRef } from './toast-ref';

export class ToastListRef {
  constructor(public toasts: Subject<ToastRef[]>) {}
}
