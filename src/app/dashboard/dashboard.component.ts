import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    events: FullCalendarEvent[];

    @ViewChild('modal') modal;

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
            ]
        });
    }

    onEventClicked(event) {
        this.selectedEvent = event;
        
        this.modal.open();
    }

}