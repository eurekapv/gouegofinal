import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDetailCalendarPageRoutingModule } from './course-detail-calendar-routing.module';

import { CourseDetailCalendarPage } from './course-detail-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CourseDetailCalendarPageRoutingModule,
    
    FormsModule,
  ],
  declarations: [CourseDetailCalendarPage],
  exports: [CourseDetailCalendarPage]
})
export class CourseDetailCalendarPageModule {}
