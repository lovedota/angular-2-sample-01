
import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-calendar',
    template: `
        <div></div>
    `
})
export class CalendarComponent implements OnInit, OnChanges { 
    @Input() events: FullCalendarEvent[];
    
    constructor(private elmenentRef: ElementRef) {}

    ngOnInit() {
        $(this.elmenentRef.nativeElement).fullCalendar({
            defaultView: 'agendaDay',
            events: [
                // events go here
            ],
            resources: [
                // resources go here
            ]
            // other options go here...
        });
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        
        for (let propName in changes) {
            let changedProp = changes[propName];
            let from = JSON.stringify(changedProp.previousValue);
            let to =   JSON.stringify(changedProp.currentValue);
            
            log.push( `${propName} changed from ${from} to ${to}`);

            if (propName === 'events') {
                $(this.elmenentRef.nativeElement).fullCalendar('addEventSource', changedProp.currentValue)
            }
        }
        console.log(log);
    }
}