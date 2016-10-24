import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero-list/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesService } from './heroes.service';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: 'heroes',
        component: HeroListComponent
      },
      {
        path: 'hero/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [HeroesService],
  bootstrap: []
})
export class HeroesModule { }
