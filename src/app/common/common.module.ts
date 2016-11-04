import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';
import { DateTimePickerComponent } from './datetimepicker/datetime-picker.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    CalendarComponent,
    DateTimePickerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    CalendarComponent,
    DateTimePickerComponent,
    ModalComponent
  ]
})
export class CommonModule { }
