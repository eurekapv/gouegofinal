import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CoursePage } from './course.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CalendarPageModule } from './calendar/calendar.module';
import { CalendarPage } from './calendar/calendar.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CoursePageRoutingModule,

    FormsModule,
    PipesModule,
    CalendarPageModule
  ],
  declarations: [CoursePage],
  entryComponents: [CalendarPage]
})
export class CoursePageModule {}
