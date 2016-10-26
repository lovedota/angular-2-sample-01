import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2>DASHBOARD CENTER</h2>
        <p>Get your report here</p>
        <app-calendar [events]="events"></app-calendar>
    `
})
export class DashboardComponent implements OnInit {
    events: FullCalendarEvent[];

    ngOnInit() {
        setTimeout(() => {
            this.events = [
                {
                    id: 1,
                    title: 'Daily Meeting',
                    start: moment(),
                    end: moment().add(2, 'h')
                },
                {
                    id: 2,
                    title: 'Lunch Time',
                    start: moment().add(4, 'h'),
                    end: moment().add(8, 'h')
                }
            ]
        });
    }

}