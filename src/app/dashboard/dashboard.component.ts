import { Component, OnInit, ViewChild } from '@angular/core';

import { DashboardService } from './dashboard.service';

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

    constructor(private service: DashboardService) {}

    async ngOnInit() {
        let eventsResponse = await this.service.getEvents();

        eventsResponse.forEach(e => {
            this._events.set(e.id, Object.assign(e, {start: moment(e.start), end: moment(e.end)}));
        });

        this.calendar.refresh(this.events);
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
