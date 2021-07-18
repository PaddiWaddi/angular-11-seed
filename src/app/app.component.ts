import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'app-theme-light');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'app-theme-light');
  }
}
