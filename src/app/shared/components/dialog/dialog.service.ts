import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Observable, Subject } from 'rxjs';

import { ButtonStyle, LoadingState } from '../button/button.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { OverlayService } from './overlay.service';

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
  /** Action to return */
  type: ActionType;
  /** Button Style */
  style?: ButtonStyle;
  /** Leading Icon */
  icon?: IconDefinition;
  /** Button State */
  state?: LoadingState;
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
 * Data to initialize a dialog
 */
export interface IDialogData {
  /** Options that define how the dialog looks */
  options: IDialogOptions;
  /** Event emitter */
  subject: Subject<DialogEvent>;
}

/**
 * An event that is raised by a dialog action
 */
export class DialogEvent {
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
    public readonly continueDialog: (
      message?: string,
      state?: LoadingState.Rest | LoadingState.Error | LoadingState.Success
    ) => void,
    public readonly dismissDialog: () => void
  ) {}
}

/**
 * Easily open a dialog to get user confirmation
 */
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private overlayService: OverlayService) {}

  /**
   * Open a dialog with the given options.
   * @param options Dialog options
   */
  public open(options: IDialogOptions): Observable<DialogEvent> {
    const subject = new Subject<DialogEvent>();

    this.overlayService.open<object, IDialogData>(MessageDialogComponent, { options, subject }, true);

    return subject.asObservable();
  }
}
