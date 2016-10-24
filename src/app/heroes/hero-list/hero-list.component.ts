import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero.model';
import { HeroComponent } from './hero.component';
import { HeroesService } from '../heroes.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router, private service: HeroesService) { }

    async ngOnInit() {
        this.heroes = await this.service.getHeroes();
    }

    private onSelect(hero: Hero) {
        //this.selectedHero = hero;
        this.router.navigate(['/hero', hero.id]);
    }
}
