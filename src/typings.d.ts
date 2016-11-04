// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
/// <reference path="../typings/index.d.ts" />

declare var System: any;

type FullCalendarMethods = 'destroy' | 'addEventSource' | 'removeEventSource' | 'removeEventSources' | 'updateEvent' | 'removeEvents' | 'refetchEventSources';
type FullCalendarDefaultViews = 'month' | 'basicWeek' | 'basicDay' | 'agendaWeek' | 'agendaDay' | 'listYear' | 'listMonth' | 'listWeek' | 'listDay';

interface FullCalendarOptions {
    defaultView: FullCalendarDefaultViews;
    events: ((start: moment.Moment, end: moment.Moment, timezone, callback) => void) | FullCalendarEvent[];
    eventClick?: (event: FullCalendarEvent) => void;
    eventDrop?: (event: FullCalendarEvent, delta, revertFunc) => void;
    eventResize?: (event: FullCalendarEvent, delta, revertFunc) => void;
    dayClick?: (date: moment.Moment, jsEvent, view) => void;
    editable?: boolean;
    viewRender?: any;
}

interface JQuery {
    fullCalendar(options: FullCalendarOptions);
    fullCalendar(method: FullCalendarMethods, value?: any);
    datetimepicker(options?);
    modal(options?);
}

interface FullCalendarEvent {
    id: number | string;
    title: string;
    allDay?: boolean;
    start: moment.Moment;
    end: moment.Moment;
    content: string;
}