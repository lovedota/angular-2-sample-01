import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  bootstrap: []
})
export class DashboardModule { }
