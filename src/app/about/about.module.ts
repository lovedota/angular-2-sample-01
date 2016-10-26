import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  bootstrap: []
})
export class AboutModule { }
