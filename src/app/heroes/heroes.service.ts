import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from './hero.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroesService {
    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get('app/heroes/heroes.json')
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    getHero(id): Promise<Hero> {
        return this.http.get('app/heroes/heroes.json')
            .toPromise()
            .then(response => {
                let hero = (response.json() as Hero[]).find(hero => hero.id === id);
                
                return hero;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}