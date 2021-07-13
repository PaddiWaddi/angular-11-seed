import { Component, OnInit, ContentChild, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { PageHeaderDirective } from './page-header.directive';
import { PageFooterDirective } from './page-footer.directive';

/**
 * Structural component representing a page. Used to lay out header and content
 */
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  /** Content slot for header */
  @ContentChild(PageHeaderDirective)
  @HostBinding('class.no-top')
  public header: PageHeaderDirective;

  /** Content for footer */
  @ContentChild(PageHeaderDirective)
  @HostBinding('class.no-bottom')
  public footer: PageFooterDirective;
}
