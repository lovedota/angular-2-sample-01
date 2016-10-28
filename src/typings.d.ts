// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;
declare var moment: any;

type FullCalendarMethods = 'destroy' | 'addEventSource' | 'removeEventSource' | 'updateEvent' | 'removeEvents';
type FullCalendarDefaultViews = 'month' | 'basicWeek' | 'basicDay' | 'agendaWeek' | 'agendaDay' | 'listYear' | 'listMonth' | 'listWeek' | 'listDay';

interface FullCalendarOptions {
    defaultView: FullCalendarDefaultViews;
    events: FullCalendarEvent[];
    eventClick?: (event: FullCalendarEvent) => void;
    eventDrop?: (event: FullCalendarEvent, delta, revertFunc) => void;
}

interface JQuery {
    fullCalendar(options: FullCalendarOptions);
    fullCalendar(method: FullCalendarMethods, value?: any);

    modal(options?);
}

interface FullCalendarEvent {
    id: number | string;
    title: string;
    allDay?: boolean;
    start: Date;
    end: Date;
    content: string;
}

