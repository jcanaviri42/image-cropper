import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, ImageCropperComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
