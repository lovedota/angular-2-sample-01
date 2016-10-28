
import { 
    Component, OnInit, ElementRef, EventEmitter, Input, Output, OnChanges, SimpleChange, OnDestroy 
} from '@angular/core';

@Component({
    selector: 'app-calendar',
    template: `
        <div></div>
    `
})
export class CalendarComponent implements OnInit, OnDestroy, OnChanges { 
    @Input() events: FullCalendarEvent[];
    @Output() onEventClicked = new EventEmitter<FullCalendarEvent>();

    private $element: JQuery;
    
    constructor(private elmenentRef: ElementRef) {}

    ngOnInit() {
        const self = this;

        this.$element = $(this.elmenentRef.nativeElement);
        
        this.$element.fullCalendar({
            defaultView: 'agendaDay',
            events: [],
            eventClick(event) {
                self.onEventClicked.emit(event);
            }
        });
    }

    ngOnDestroy() {
        this.$element.fullCalendar('destroy');
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        
        for (let propName in changes) {
            let changedProp = changes[propName];
            let from = JSON.stringify(changedProp.previousValue);
            let to =   JSON.stringify(changedProp.currentValue);
            
            log.push(`${propName} changed from ${from} to ${to}`);

            if (propName === 'events' && this.$element) {
                this.$element.fullCalendar('addEventSource', changedProp.currentValue)
            }
        }
        console.log(log);
    }
}