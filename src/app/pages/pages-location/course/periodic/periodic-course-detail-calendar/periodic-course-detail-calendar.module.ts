import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicCourseDetailCalendarPageRoutingModule } from './periodic-course-detail-calendar-routing.module';

import { PeriodicCourseDetailCalendarPage } from './periodic-course-detail-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PeriodicCourseDetailCalendarPageRoutingModule,
    
    FormsModule,
  ],
  declarations: [PeriodicCourseDetailCalendarPage],
  exports: [PeriodicCourseDetailCalendarPage]
})
export class PeriodicCourseDetailCalendarPageModule {}
