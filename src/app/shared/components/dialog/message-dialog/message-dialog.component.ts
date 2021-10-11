import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { ButtonStyle, LoadingState } from '@shared/components/button/button.component';
import { Subject } from 'rxjs';
import { ActionType, DialogEvent, IDialogAction, IDialogOptions, IDialogData } from '../dialog.service';
import { OverlayData } from '../overlay-ref';

/**
 * A simple dialog displaying a message and a couple of buttons.
 */
@Component({
  selector: 'app-subscribe',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animateHost', [
      transition(':enter', [animate('150ms ease-out')]),
      transition(':leave', [animate('150ms ease-in')]),
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(50px) scale(0.9)',
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
          transform: 'translateY(0) scale(1)',
        })
      ),
    ]),
  ],
})
export class MessageDialogComponent {
  /** Emits dialog events */
  private eventSubject: Subject<DialogEvent> = new Subject<DialogEvent>();

  /** Options to display */
  public options: IDialogOptions | null = null;

  /** Add entry animation */
  @HostBinding('@animateHost') animate: boolean = true;

  // TEMPLATE REFERENCES
  /** ButtonStyle to use in template */
  public ButtonStyle: typeof ButtonStyle = ButtonStyle;
  /** Current Loading state */
  public LoadingState: typeof LoadingState = LoadingState;
  /** Currently activated button */
  public activatedAction: IDialogAction | null = null;

  /** Activated Button */
  constructor(public ref: OverlayData<undefined, IDialogData>, private cdRef: ChangeDetectorRef) {
    this.eventSubject = ref.data.subject;
    this.options = ref.data.options;
  }

  /**
   * On button click, emits an event with the given action.
   * The Cancel event automatically closes the dialog
   */
  public onAction(action: IDialogAction): void {
    if (this.activatedAction) {
      return;
    }
    this.activatedAction = action;
    action.state = LoadingState.Loading;

    this.cdRef.markForCheck();

    this.eventSubject.next(
      new DialogEvent(action.type, { ...action }, this.continueDialog.bind(this), this.dismissDialog.bind(this))
    );

    if (action.type === ActionType.Cancel) {
      this.ref.close(null);
      return;
    }
  }

  /**
   * Continue the dialog and optionally show the given message
   * @param message message to display, e.g. error
   * @param state button state to show
   */
  public continueDialog(message?: string, state?: LoadingState.Rest | LoadingState.Error | LoadingState.Success): void {
    this.activatedAction!.state = state;
    this.activatedAction = null;
    this.cdRef.markForCheck();
  }

  /**
   * Dismiss the dialog.
   */
  public dismissDialog(): void {
    this.ref.close(null);
  }
}
