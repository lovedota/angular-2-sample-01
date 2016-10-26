import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CommonModule { }
