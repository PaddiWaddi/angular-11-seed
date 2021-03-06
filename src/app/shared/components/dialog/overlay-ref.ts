import { Subject } from 'rxjs';

import { OverlayRef } from '@angular/cdk/overlay';

import { TemplateRef, Type } from '@angular/core';

export interface OverlayCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: R | null;
}

// R = Response Data Type, T = Data passed to Modal Type
export class OverlayData<R = any, T = any> {
  private afterClosed$: Subject<OverlayCloseEvent<R>> = new Subject<OverlayCloseEvent<R>>();

  constructor(
    public overlay: OverlayRef,
    public content: string | Type<any> | TemplateRef<any> | null,
    public data: T, // pass data to modal i.e. FormData
    public backdropClose: boolean = false
  ) {
    overlay.backdropClick().subscribe(() => {
      if (backdropClose) {
        this._close('backdropClick', null);
      }
    });
  }

  public close(data: R | null): void {
    this._close('close', data);
  }

  private _close(type: 'backdropClick' | 'close', data: R | null): void {
    this.overlay.dispose();
    this.afterClosed$.next({
      type,
      data,
    });

    this.afterClosed$.complete();
  }
}
