import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
