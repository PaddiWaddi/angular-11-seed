import { Component, OnInit } from '@angular/core';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'app-subscribe',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent implements OnInit {
  constructor(private ref: DialogRef) {}

  ngOnInit() {}

  submit() {
    this.ref.close('');
  }

  cancel() {
    this.ref.close(null);
  }
}
