import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private http: HttpClient) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'app-theme-dark');

    this.http
      .get('http://ztix-api.vcap.me/sale/events/?test=123', { params: { booking_office: 1 } })
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'app-theme-dark');
  }
}
