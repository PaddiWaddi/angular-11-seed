import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { timer } from 'rxjs';

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
  constructor(public options: IToastOptions) {}
}

/**
 * Type of message a toast is sending
 */
export type ToastType = 'info' | 'success' | 'error' | 'warning';
