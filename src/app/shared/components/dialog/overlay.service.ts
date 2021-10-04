import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { OverlayData } from './overlay-ref';
import { OverlayComponent } from './overlay.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  public open<R extends object, T extends object>(
    content: string | TemplateRef<any> | Type<any>,
    data: T
  ): OverlayData<R> {
    const configs = this.getOverlayConfig(
      new OverlayConfig({
        hasBackdrop: true,
        panelClass: [],
        backdropClass: ['dark-backdrop'],
      })
    );

    const overlayRef = this.overlay.create(configs);

    const myOverlayRef = new OverlayData<R, T>(overlayRef, content, data);

    const injector = this.createInjector(myOverlayRef, this.injector);
    overlayRef.attach(new ComponentPortal(OverlayComponent, null, injector));

    return myOverlayRef;
  }

  private createInjector(ref: OverlayData, inj: Injector): PortalInjector {
    const injectorTokens = new WeakMap([[OverlayData, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }

  private getOverlayConfig(config: OverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }
}
