import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorycoursePageRoutingModule } from './historycourse-routing.module';

import { HistorycoursePage } from './historycourse.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CalendarPage } from 'src/app/pages/location/course/detailcourse/calendar/calendar.page';
import { CalendarPageModule } from 'src/app/pages/location/course/detailcourse/calendar/calendar.module';
import { AllegatilistPageModule } from 'src/app/pages/history/historycourse/allegatilist/allegatilist.module';
import { AllegatilistPage } from './allegatilist/allegatilist.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';





@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HistorycoursePageRoutingModule,
    
    PipesModule,
    CalendarPageModule,
    AllegatilistPageModule,
    FormsModule,
    SharedComponentsModule
  ],
  entryComponents:[CalendarPage, AllegatilistPage],
  declarations: [HistorycoursePage]
})
export class HistorycoursePageModule {}
