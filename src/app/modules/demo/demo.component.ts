import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { LoadingState } from '@shared/components/button/button.component';
import { DialogService } from '@shared/components/dialog/dialog.service';
import { MessageDialogComponent } from '@shared/components/dialog/message-dialog/message-dialog.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  public icons: typeof icons = icons;

  public loadingState: LoadingState = LoadingState.Rest;

  constructor(private cdRef: ChangeDetectorRef, private dialogService: DialogService) {}

  ngOnInit(): void {}

  public buttonClick(): void {
    this.loadingState = LoadingState.Loading;

    setTimeout(() => {
      this.loadingState = LoadingState.Error;
      this.cdRef.markForCheck();
    }, 1000);
  }

  public open() {
    this.dialogService.open(MessageDialogComponent, '');
  }
}
