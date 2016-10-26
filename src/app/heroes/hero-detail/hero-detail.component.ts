import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroesService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getHero(id).then(hero => this.hero = hero);
        });
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
}

