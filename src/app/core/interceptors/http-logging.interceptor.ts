import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpEvent,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Logger } from '@core/utility-services/logger.service';

const REQUEST_STYLE = [
  'background: #64748B; color: white; padding: 3px 4px 3px 6px; border-radius: 3px; line-height: 18px',
  '', // reset style after second use of %c
];

const REQUEST_SUCCESS_STYLE = [
  'background: #22C55E; color: white; padding: 3px 4px 3px 6px; border-radius: 3px; line-height: 18px',
  '',
];

const REQUEST_ERROR_STYLE = [
  'background: #EF4444; color: white; padding: 3px 4px 3px 6px; border-radius: 3px; line-height: 18px',
  '',
];

const REQUEST_DETAIL_STYLE = ['font-weight: bold; color: #0F172A;', ''];

/**
 * An HttpInterceptor that logs http requests in a well formatted style to the console, including helpful details.
 */
@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
  constructor(private logger: Logger) {}

  /**
   * Called when an http request is created. Attach to the events and log their results.
   */
  // tslint:disable-next-line: no-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();

    const displayUrl = this.getDisplayUrl(req.url);

    // Respond to success and error
    return next.handle(req).pipe(
      tap(
        // on success
        (event) => {
          if (!(event instanceof HttpResponse)) {
            // Check if params were provided using httpClient params option
            const urlParts = req.url.split('?');

            if (urlParts.length > 1) {
              this.logger.warn(
                'Query parameters were supplied as plain text. Use the options argument when using HttpClient.'
              );
              this.logger.warn(`Param string: ${urlParts[1]}`);
            }

            // REQUEST LOGGING
            this.logger.groupCollapsed(`%c${req.method} SENT%c ${displayUrl}`, ...REQUEST_STYLE);

            // log request body
            if (req.body) {
              this.logger.groupCollapsed(`%cbody...%c`, ...REQUEST_DETAIL_STYLE);
              this.logger.log(req.body);
              this.logger.groupEnd();
            }
          } else if (event instanceof HttpResponse) {
            // RESPONSE LOGGING
            this.logger.groupCollapsed(`%c${req.method} SUCCESSFULL %c ${displayUrl}`, ...REQUEST_SUCCESS_STYLE);

            // log response body
            if (event.body) {
              this.logger.groupCollapsed(`%cbody ...%c`, ...REQUEST_DETAIL_STYLE);
              this.logger.log(event.body);
              this.logger.groupEnd();
            }

            if (event.status) {
              // log status
              this.logger.log(`%cstatus:   %c HTTP ${event.status}`, ...REQUEST_DETAIL_STYLE);
            }
          }

          // log duration
          this.logger.log(`%ctime:   %c ${Date.now() - startTime} ms`, ...REQUEST_DETAIL_STYLE);

          // log method
          this.logger.log(`%cmethod:   %c ${req.method}`, ...REQUEST_DETAIL_STYLE);

          // log url
          this.logger.log(`%curl:   %c ${req.url}`, ...REQUEST_DETAIL_STYLE);

          // log params
          this.logParams(req.params);

          // close group
          this.logger.groupEnd();
        },
        // on error
        (event: HttpErrorResponse) => {
          // log request
          this.logger.groupCollapsed(`%c${req.method} FAILED %c ${displayUrl}`, ...REQUEST_ERROR_STYLE);
          // log duration
          this.logger.log(`%ctime:   %c ${Date.now() - startTime} ms`, ...REQUEST_DETAIL_STYLE);
          // log method
          this.logger.log(`%cmethod:   %c ${req.method}`, ...REQUEST_DETAIL_STYLE);
          // log status
          this.logger.log(`%cstatus:   %c HTTP ${event.status}`, ...REQUEST_DETAIL_STYLE);
          // log url
          this.logger.log(`%curl:   %c ${req.url}`, ...REQUEST_DETAIL_STYLE);
          // log params
          this.logParams(req.params);

          // log response body
          if (event.error) {
            this.logger.groupCollapsed(`%cerror ...%c`, ...REQUEST_DETAIL_STYLE);
            this.logger.log(event.error);
            this.logger.groupEnd();
          }
          this.logger.groupEnd();
        }
      )
    );
  }

  /**
   * Shortens the Url to the parts that are needed to be displayed
   * @param url Url to shorten
   */
  private getDisplayUrl(url: string): string {
    // remove domain
    url = url.replace(/^.*\/\/[^\/]+/, '');

    const parts = url.split('?');

    return parts.length ? parts[0] : '';
  }

  /**
   * Logs params from the request
   * @param params Http Params to print
   * @param url Params that were part of the url
   */
  private logParams(params: HttpParams): void {
    if (!params || !params.keys().length) {
      return;
    }

    this.logger.group('%cparams', ...REQUEST_DETAIL_STYLE);

    for (const key of params.keys()) {
      this.logger.log(`%c${key}:   %c ${params.getAll(key)}`, ...REQUEST_DETAIL_STYLE);
    }

    this.logger.groupEnd();
  }
}
