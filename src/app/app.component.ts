import { Component } from '@angular/core';
import { Size } from './shared/layout/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-seed';

  public Size = Size;
}
