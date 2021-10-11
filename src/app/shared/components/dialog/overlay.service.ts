import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { OverlayData } from './overlay-ref';
import { OverlayComponent } from './overlay.component';

/**
 * Allows to display modals as overlays
 */
@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  /**
   * Opens the given component as a Modal
   * @param content Component to display as the modal
   * @param data Data to send to the component
   * @returns Overlay Ref that allows access to the overlay
   */
  public open<R extends object, T extends object>(
    content: string | TemplateRef<any> | Type<any>,
    data: T,
    backdropClose: boolean = true
  ): OverlayData<R> {
    const configs = this.getOverlayConfig(
      new OverlayConfig({
        hasBackdrop: true,
        panelClass: [],
        backdropClass: ['dark-backdrop'],
      })
    );

    const overlayRef = this.overlay.create(configs);

    const myOverlayRef = new OverlayData<R, T>(overlayRef, content, data, backdropClose);

    const injector = this.createInjector(myOverlayRef, this.injector);
    overlayRef.attach(new ComponentPortal(OverlayComponent, null, injector));

    return myOverlayRef;
  }

  /**
   * Creates the injector
   */
  private createInjector(ref: OverlayData, inj: Injector): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [{ provide: OverlayData, useValue: ref }],
    });
  }

  /**
   * Make a config
   */
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
