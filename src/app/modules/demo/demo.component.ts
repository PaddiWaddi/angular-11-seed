import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { LoadingState } from '@shared/components/button/button.component';
import { DialogService } from '@shared/components/dialog/dialog.service';
import { ToastService } from '@shared/components/toast/toast.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  public icons: typeof icons = icons;

  public loadingState: LoadingState = 'loading';

  constructor(private cdRef: ChangeDetectorRef, private dialogService: DialogService, private toast: ToastService) {}

  public buttonClick(): void {
    this.loadingState = 'loading';

    setTimeout(() => {
      this.loadingState = 'error';
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
            type: 'cancel',
          },
          {
            content: 'löschen',
            type: 'primary',
            icon: this.icons.faTrash,
            style: 'filled-danger',
          },
        ],
      })
      .subscribe((event) => {
        switch (event.type) {
          case 'primary':
            setTimeout(() => {
              event.continueDialog('Das hat nicht geklappt', 'error');
            }, 500);
            break;
        }
      });
  }

  public addToast() {
    this.toast.show({
      type: 'info',
      message: 'Yeah',
    });
  }
}
