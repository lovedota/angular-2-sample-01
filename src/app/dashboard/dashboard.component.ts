import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    events: FullCalendarEvent[];

    @ViewChild('modal') modal;
    @ViewChild('calendar') calendar;

    selectedEvent: FullCalendarEvent;

    ngOnInit() {
        setTimeout(() => {
            this.events = [
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

            this.calendar.refresh(this.events);
        });
    }

    onEventClicked(event) {
        this.selectedEvent = event;

        this.modal.open();
    }

    onDayClicked(date: moment.Moment) {
        this.selectedEvent = {
            id: this.events.length + 1,
            title: 'New Event',
            content: '',
            start: date,
            end: date.clone().add(30, 'minutes')
        };

        this.modal.open();
    }

    onEventDropped(droppedEvent) {
        let event = this.events.find(e => e.id === droppedEvent.id);

        event.start = droppedEvent.start;
        event.end = droppedEvent.end;

        this.calendar.refresh(this.events);
    }

    onFormSubmited(event) {
        this.events.push(event);

        this.selectedEvent = null;

        this.calendar.refresh(this.events);

        this.modal.close();
    }
}
