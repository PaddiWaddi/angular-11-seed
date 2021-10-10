import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { ButtonStyle, LoadingState } from '@shared/components/button/button.component';
import { ActionType, DialogService } from '@shared/components/dialog/dialog.service';

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

  constructor(private cdRef: ChangeDetectorRef, private dialogService: DialogService) {}

  ngOnInit(): void {}

  public buttonClick(): void {
    this.loadingState = LoadingState.Loading;

    setTimeout(() => {
      this.loadingState = LoadingState.Error;
      this.cdRef.markForCheck();
    }, 5000);
  }

  public open() {
    this.dialogService
      .open({
        title: 'Löschen',
        message: 'Möchten Sie das wirklich löschen?',
        actions: [
          {
            content: 'abbrechen',
            type: ActionType.Cancel,
          },
          {
            content: 'löschen',
            type: ActionType.Primary,
            icon: this.icons.faTrash,
            style: ButtonStyle.FilledDanger,
          },
        ],
      })
      .subscribe((event) => {
        switch (event.type) {
          case ActionType.Primary:
            setTimeout(() => {
              event.continueDialog('Das hat nicht geklappt', LoadingState.Error);
            }, 500);
            break;
        }
      });
  }
}
