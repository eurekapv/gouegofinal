import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryCoursePageRoutingModule } from './history-course-routing.module';

import { HistoryCoursePage } from './history-course.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { QRCodeModule } from 'angularx-qrcode';
import { CourseDetailCalendarPageModule } from '../../pages-location/location-course-detail/course-detail-calendar/course-detail-calendar.module';
import { AllegatilistPageModule } from '../allegatilist/allegatilist.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryCoursePageRoutingModule,
    SharedComponentsModule,
    QRCodeModule,
    PipesModule

  ],
  declarations: [HistoryCoursePage]
})
export class HistoryCoursePageModule {}
