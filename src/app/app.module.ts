import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpLoggingInterceptor } from '@core/interceptors/http-logging.interceptor';
import { Logger } from '@core/utility-services/logger.service';
import { OverlayComponent } from '@shared/components/dialog/overlay.component';
import { ToastListComponent } from '@shared/components/toast/toast-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const httpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders, Logger],
  entryComponents: [OverlayComponent, ToastListComponent],
})
export class AppModule {}
