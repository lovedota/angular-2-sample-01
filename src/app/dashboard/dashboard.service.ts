import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EventResponse } from './dashboard.model';

@Injectable()
export class DashboardService {
    constructor(private http: Http) { }

    getEvents(): Promise<EventResponse[]> {
        return this.http.get('app/dashboard/events.json')
            .toPromise()
            .then(response => response.json() as EventResponse[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}