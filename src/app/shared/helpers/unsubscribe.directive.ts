import { OnDestroy, Directive } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Unsubscribe base component, that provides the standard unsubscribe functionality
 */
@Directive()
export abstract class UnsubscribeDirective implements OnDestroy {
  /** Unsubscribe subject */
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  /**
   * Complete the Subject on destroy
   */
  public ngOnDestroy(): void {
    this.completeSubscriber();
  }

  /**
   * Completes the Subject to unsubscribe all subscribers
   */
  protected completeSubscriber(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
