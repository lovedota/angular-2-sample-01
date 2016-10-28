import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    CalendarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    CalendarComponent,
    ModalComponent
  ]
})
export class CommonModule { }
