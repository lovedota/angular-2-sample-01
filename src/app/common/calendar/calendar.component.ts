
import { 
    Component, OnInit, ElementRef, EventEmitter, Input, Output, OnChanges, SimpleChange, OnDestroy 
} from '@angular/core';

function elementsFromPoint(x,y) {
	var elements = [], previousPointerEvents = [], current, i, d;

        // get all elements via elementFromPoint, and remove them from hit-testing in order
	while ((current = document.elementFromPoint(x,y)) && elements.indexOf(current)===-1 && current != null) {
          
            // push the element and its current style
		elements.push(current);
		previousPointerEvents.push({
                value: current.style.getPropertyValue('pointer-events'),
                priority: current.style.getPropertyPriority('pointer-events')
            });
          
            // add "pointer-events: none", to get to the underlying element
		current.style.setProperty('pointer-events', 'none', 'important'); 
	}

        // restore the previous pointer-events values
	for(i = previousPointerEvents.length; d=previousPointerEvents[--i]; ) {
		elements[i].style.setProperty('pointer-events', d.value?d.value:'', d.priority); 
	}
      
        // return our results
	return elements;
}

@Component({
    selector: 'app-calendar',
    template: `
        <div></div>
    `
})
export class CalendarComponent implements OnInit, OnDestroy, OnChanges { 
    @Output() onEventClicked = new EventEmitter<FullCalendarEvent>();
    @Output() onEventDropped = new EventEmitter<FullCalendarEvent>();
    @Output() onCalendarClicked = new EventEmitter<any>(); 

    private $element: JQuery;
    
    constructor(private elmenentRef: ElementRef) {}

    public refresh(events) {
       this.$element.fullCalendar('removeEventSources');

       this.$element.fullCalendar('addEventSource', events);
    }

    ngOnInit() {
        const self = this;

        this.$element = $(this.elmenentRef.nativeElement);
        
        this.$element.fullCalendar({
            defaultView: 'agendaDay',
            events: [],
            editable: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            eventClick(event) {
                self.onEventClicked.emit(event);
            },
            eventDrop(event, delta, revertFunc) {
                self.onEventDropped.emit(event);
            },
            dayClick(date, jsEvent, view) {
                
            },
            viewRender(view, element) {
                element.on('click', (event) => {
                    let acceptClasses = ['fc-widget-content', 'fc-widget-content'];
                    let target = $(event.target);

                    if (acceptClasses.includes(event.target.className)) {
                        let time = target.data('time') || target.parent().data('time');
                        let date = element.find('.fc-day-header').data('date');

                        console.log(date, time);

                        self.onCalendarClicked.emit(moment(`${date} ${time}`));
                    }       
                });
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
                //this.$element.fullCalendar('addEventSource', changedProp.currentValue)
            }
        }
        //console.log(log);
    }
}