import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ButtonStyle, LoadingState } from '@shared/components/button/button.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { OverlayData } from '../overlay-ref';

/**
 * Dialog Options
 */
export interface IDialogOptions {
  /** Title of the message */
  title: string;
  /** Message content */
  message: string;
  /** List of buttons to display */
  actions: IDialogAction[];
}

export interface IDialogAction {
  /** Button Content */
  content: string;
  /** Button Style */
  style?: ButtonStyle;
  /** Leading Icon */
  icon?: IconDefinition;
  /** Action to return */
  type: ActionType;
}

/**
 * Types of a dialog action
 */
export enum ActionType {
  /** Cancels the action and closes the dialog synchronously */
  Cancel,
  /** Primary async action */
  Primary,
  /** Secondary async action */
  Secondary,
  /** Tertiary async action */
  Tertiary,
  /** Quaternary async action */
  Quaternary,
}

/**
 * An event that is raised by a dialog action
 */
class DialogEvent {
  /**
   *
   * @param type Type of the action
   * @param action Action that was activated
   * @param continueDialog Continues the dialog and shows the given message to the user
   * @param dismissDialog Dismisses the dialog
   */
  constructor(
    public readonly type: ActionType,
    public readonly action: IDialogAction,
    public readonly continueDialog: (message?: string, response?: LoadingState.Error | LoadingState.Success) => void,
    public readonly dismissDialog: () => void
  ) {}
}

/**
 * A simple dialog displaying a message and a couple of buttons.
 */
@Component({
  selector: 'app-subscribe',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent {
  // TEMPLATE REFERENCES
  /** ButtonStyle to use in template */
  public ButtonStyle: typeof ButtonStyle = ButtonStyle;
  /** Current Loading state */
  public loading: LoadingState = LoadingState.Rest;
  /** Currently activated button */
  public activatedAction: IDialogAction | null = null;

  /** Activated Button */
  constructor(public ref: OverlayData<DialogEvent, IDialogOptions>) {}

  /**
   * Perform action that was pressed by user
   */
  public onAction(action: IDialogAction): void {
    if (action.type === ActionType.Cancel) {
      this.ref.close(null);
      return;
    }

    this.activatedAction = action;

    this.ref.close(new DialogEvent(action.type, action, this.continueDialog, this.dismissDialog));
  }

  /**
   * Continue the dialog and optionally show the given message
   * @param message
   * @param state
   */
  public continueDialog(message?: string, state?: LoadingState): void {
    this.activatedAction = null;
    this.loading = state || LoadingState.Rest;
  }

  public dismissDialog(): void {
    this.ref.close(null);
  }
}
