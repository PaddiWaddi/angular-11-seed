import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageDialogComponent } from '@shared/components/dialog/message-dialog/message-dialog.component';
import { OverlayComponent } from '@shared/components/dialog/overlay.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
  entryComponents: [OverlayComponent, MessageDialogComponent],
})
export class AppModule {}
