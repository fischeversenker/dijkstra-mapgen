import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapPipe } from './map.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MapPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [MapPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
