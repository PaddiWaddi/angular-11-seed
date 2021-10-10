import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { OverlayData } from './overlay-ref';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  public closeIcon: IconDefinition = faTimes;

  public contentType: 'template' | 'string' | 'component' = 'string';
  public contentTemplate: TemplateRef<any> | null = null;
  public contentComponent: Type<any> | null = null;
  public contentString: string | null = null;
  public context: any = {};
  public backdropClose: boolean = true;

  constructor(private ref: OverlayData) {}

  public close(): void {
    this.ref.close(null);
  }

  public ngOnInit(): void {
    const content = this.ref.content;
    this.backdropClose = this.ref.backdropClose;

    if (typeof content === 'string') {
      this.contentType = 'string';
      this.contentString = content;
    } else if (content instanceof TemplateRef) {
      this.contentType = 'template';
      this.contentTemplate = content;
      this.context = {
        close: this.ref.close.bind(this.ref),
      };
    } else {
      this.contentType = 'component';
      this.contentComponent = content;
    }
  }
}
