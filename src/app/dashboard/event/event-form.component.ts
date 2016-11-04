import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html'
})
export class EventFormComponent {
    @Input() event: FullCalendarEvent;
    @Output() onFormSubmit = new EventEmitter<any>();

    onSubmit() {
        let updatedEvent = {
            id: this.event.id,
            title: this.event.title,
            content: this.event.content,
            start: moment(this.event.start),
            end: moment(this.event.end)
        };

        this.onFormSubmit.emit(updatedEvent);
    }
}
