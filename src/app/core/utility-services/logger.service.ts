import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { environment } from 'environments/environment';
import { isPlatformBrowser } from '@angular/common';

/** Set to true to force turn on logging, only in browser  */
const HARD_ENABLE_LOGGING = false;

/**
 * Logger utility, proxy for console. Only logs in production, or when explicitly enabled.
 */
@Injectable()
export class Logger {
  /** Is true if the code is run in the browser */
  private isPlatformBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }
  /**
   * Determine if logging is enabled
   */
  private canLog(): boolean {
    return this.isPlatformBrowser && (!environment.production || HARD_ENABLE_LOGGING);
  }

  /**
   * Log to console, only if not in production mode and if using a browser.
   * {@link console.log}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public log(...data: any[]): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.log(...data);
  }

  /**
   * Warn to console, only if not in production mode and if using a browser.
   * {@link console.warn}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public warn(...data: any[]): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.warn(...data);
  }

  /**
   * Error to console, only if not in production mode and if using a browser.
   * {@link console.error}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(...data: any[]): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.error(...data);
  }

  /**
   * Table to console if not in production mode and if using a browser.
   * {@link console.table}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public table(tabularData?: any, properties?: string[] | undefined): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.table(tabularData, properties);
  }

  /**
   * Group console if not in production mode and if using a browser.
   * {@link console.group}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public group(...data: any[]): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.group(...data);
  }

  /**
   * Group end console if not in production mode and if using a browser.
   * {@link console.groupEnd}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public groupEnd(): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  /**
   * Group collapsed console if not in production mode and if using a browser.
   * {@link console.groupCollapsed}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public groupCollapsed(...data: any[]): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    console.groupCollapsed(...data);
  }

  /**
   * Opens an alert only if not in production mode and if using a browser.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public alert(message?: any): void {
    if (!this.canLog()) {
      return;
    }

    // eslint-disable-next-line no-console
    alert(message);
  }
}
