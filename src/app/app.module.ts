import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lazy1Component } from './lazy1/lazy1.component';
import { Lazy2Component } from './lazy2/lazy2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lazy1Component,
    Lazy2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[Lazy1Component,Lazy2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
