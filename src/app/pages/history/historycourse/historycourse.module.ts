import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorycoursePageRoutingModule } from './historycourse-routing.module';

import { HistorycoursePage } from './historycourse.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CalendarPage } from 'src/app/pages/location/course/detailcourse/calendar/calendar.page';
import { CalendarPageModule } from 'src/app/pages/location/course/detailcourse/calendar/calendar.module';




@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HistorycoursePageRoutingModule,
    
    PipesModule,
    CalendarPageModule,
    FormsModule,
  ],
  entryComponents:[CalendarPage],
  declarations: [HistorycoursePage]
})
export class HistorycoursePageModule {}
