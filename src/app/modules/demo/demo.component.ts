import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { LoadingState } from '@shared/components/button/button.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  public icons: typeof icons = icons;

  public loadingState: LoadingState = LoadingState.Rest;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  public buttonClick(): void {
    this.loadingState = LoadingState.Loading;

    setTimeout(() => {
      this.loadingState = LoadingState.Error;
      this.cdRef.markForCheck();
    }, 1000);
  }
}
