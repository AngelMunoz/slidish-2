import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncSlideHostComponent } from './enc-slide-host/enc-slide-host.component';
import { EncSlideComponent } from './enc-slide/enc-slide.component';
import { EncSampleComponent } from './enc-sample/enc-sample.component';
import { EncSampleTwoComponent } from './enc-sample-two/enc-sample-two.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    EncSlideHostComponent,
    EncSlideComponent,
    EncSampleComponent,
    EncSampleComponent,
    EncSampleTwoComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
