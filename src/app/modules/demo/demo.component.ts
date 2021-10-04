import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { ButtonStyle, LoadingState } from '@shared/components/button/button.component';
import { OverlayService } from '@shared/components/dialog/overlay.service';
import {
  ActionType,
  IDialogOptions,
  MessageDialogComponent,
} from '@shared/components/dialog/message-dialog/message-dialog.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  public icons: typeof icons = icons;

  public loadingState: LoadingState = LoadingState.Loading;

  // TEMPLATE REFERENCES
  /** ButtonStyle to use in template */
  public ButtonStyle: typeof ButtonStyle = ButtonStyle;

  constructor(private cdRef: ChangeDetectorRef, private OverlayService: OverlayService) {}

  ngOnInit(): void {}

  public buttonClick(): void {
    this.loadingState = LoadingState.Loading;

    setTimeout(() => {
      this.loadingState = LoadingState.Error;
      this.cdRef.markForCheck();
    }, 5000);
  }

  public open() {
    this.OverlayService.open<any, IDialogOptions>(MessageDialogComponent, {
      title: 'Löschen',
      message: 'Möchten Sie das wirklich löschen?',
      actions: [
        {
          content: 'abbrechen',
          action: ActionType.Cancel,
        },
        {
          content: 'löschen',
          action: ActionType.Primary,
          icon: this.icons.faTrash,
          style: ButtonStyle.FilledDanger,
        },
      ],
    });
  }
}
