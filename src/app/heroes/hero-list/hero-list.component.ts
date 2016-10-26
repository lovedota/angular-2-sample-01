import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroesService
    ) { }

    async ngOnInit() {
        this.heroes = await this.service.getHeroes();

        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number

            this.selectedHero = this.heroes.find(hero => hero.id === id);
        });
    }

    private onSelect(hero: Hero) {
        this.router.navigate(['/hero', hero.id]);
    }
}
