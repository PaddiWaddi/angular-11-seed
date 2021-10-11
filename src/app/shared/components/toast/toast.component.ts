import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * A small actionable notification
 */
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
