import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncSlideHostComponent } from './enc-slide-host/enc-slide-host.component';
import { EncSlideComponent } from './enc-slide/enc-slide.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EncSlideHostComponent, EncSlideComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
