import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, OnInit } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Observable, Subject } from 'rxjs';
import { ToastListRef } from './toast-list-ref';

import { ToastListComponent } from './toast-list.component';
import { IToastOptions, ToastRef } from './toast-ref';

/**
 * Displays popup notifications on top of the ui.
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  /** Toasts array */
  toasts: ToastRef[] = [];
  /** Array of Toasts */
  private toastListRef: ToastListRef = new ToastListRef(new Subject<ToastRef[]>());

  /**
   * Initialize the overlay list
   */
  constructor(private overlay: Overlay, private injector: Injector) {
    const positionStrategy = this.overlay.position().global().centerHorizontally().bottom();

    const configs = new OverlayConfig({
      hasBackdrop: false,
      positionStrategy,
    });

    const overlayRef = this.overlay.create(configs);
    // little hack to always have the toast list on top of ALL other overlays
    overlayRef.hostElement.style.zIndex = '1001';

    const inj = Injector.create({
      parent: this.injector,
      providers: [{ provide: ToastListRef, useValue: this.toastListRef }],
    });
    overlayRef.attach(new ComponentPortal(ToastListComponent, null, inj));
  }

  /**
   * Shows a toast with the given options
   * @param options display options
   * @returns ToastRef of the new Toast
   */
  public show(options: IToastOptions): ToastRef {
    const toast = new ToastRef(options);
    this.toasts.push(toast);
    this.updateToasts();
    return toast;
  }

  /**
   * Push Toast updates
   */
  private updateToasts(): void {
    this.toastListRef.toasts.next(this.toasts);
  }

  private dismissToast(toast: ToastRef): void {
    this.toasts.slice(this.toasts.indexOf(toast), 1);

    this.toastListRef.toasts.next(this.toasts);
  }
}
