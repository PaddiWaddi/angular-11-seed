import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, OnInit } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { ToastListComponent } from './toast-list/toast-list.component';

/**
 * Toast display options
 */
export interface IToastOptions {
  /** Toast Type */
  type: ToastType;
  /** Message to display */
  message: string;
  /** Icon to display that describes the toast */
  icon?: IconDefinition;
  /** (Optional) button label if the toast is interactive  */
  action?: string;
  /** Display time */
  duration?: 'short' | 'regular' | 'long' | 'infinite';
}

/**
 * A toast instance
 */
export class ToastRef {
  /**
   * Creates a new Toast
   * @param options Options to display
   */
  constructor(private options: IToastOptions) {}
}

/**
 * Type of message a toast is sending
 */
export enum ToastType {
  Info,
  Success,
  Error,
  Warning,
}

/**
 * Displays popup notifications on top of the ui.
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  /** Array of Toasts */
  private currentToasts: ToastRef[] = [];
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
      providers: [],
    });
    overlayRef.attach(new ComponentPortal(ToastListComponent, null, inj));
  }
}
