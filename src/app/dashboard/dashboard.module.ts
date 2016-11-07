import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { CommonModule }   from '../common/common.module';

import { DashboardComponent } from './dashboard.component';
import { EventFormComponent } from './event/event-form.component';

import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ]),
    CommonModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
