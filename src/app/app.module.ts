import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { HeroesModule } from './heroes/heroes.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    DashboardModule,
    HeroesModule,
    AboutModule,
    RouterModule.forRoot([
      { 
        path: '**', 
        component: PageNotFoundComponent,
        
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
