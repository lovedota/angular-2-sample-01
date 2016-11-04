import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    private _events = new Map<number, FullCalendarEvent>();

    @ViewChild('modal') modal;
    @ViewChild('calendar') calendar;

    selectedEvent: FullCalendarEvent;

    get events() {
        return [...this._events.values()];
    }

    ngOnInit() {
        setTimeout(() => {
            let events = [
                {
                    id: 1,
                    title: 'Daily Meeting',
                    start: moment(),
                    end: moment().add(2, 'h'),
                    content: 'Need to do it everyday to talk about what you did yesterday.'
                },
                {
                    id: 2,
                    title: 'Lunch Time',
                    start: moment().add(4, 'h'),
                    end: moment().add(8, 'h'),
                    content: 'Need to have lunch to refresh health to work in a whole day'
                }
            ];

            events.forEach(e => this._events.set(e.id, e));

            this.calendar.refresh(events);
        });
    }

    onEventClicked(event) {
        this.selectedEvent = event;

        this.modal.open();
    }

    onCalendarClicked(date: moment.Moment) {
        this.selectedEvent = {
            id: this._events.size + 1,
            title: 'New Event',
            content: '',
            start: date,
            end: date.clone().add(30, 'minutes')
        };

        this.modal.open();
    }

    onEventDropped(droppedEvent) {
        let event = this._events.get(droppedEvent.id);

        event.start = droppedEvent.start;
        event.end = droppedEvent.end;
    }

    onFormSubmited(event) {
        this._events.set(event.id, event);

        this.selectedEvent = null;

        this.calendar.refresh(this.events);

        this.modal.close();
    }
}
