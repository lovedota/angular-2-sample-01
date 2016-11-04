import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html'
})
export class EventFormComponent {
    @Input() event: FullCalendarEvent;
    @Output() onFormSubmit = new EventEmitter<any>();

    onSubmit() {
        this.onFormSubmit.emit(this.event);
    }
}
