import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcoursesPageRoutingModule } from './listcourses-routing.module';

import { ListcoursesPage } from './listcourses.page';
import { CardCourseComponent } from 'src/app/shared/components/card-course/card-course.component';
import { FilterPage } from './filter/filter.page';
import { CalendarPageModule } from '../detailcourse/calendar/calendar.module';
import { CalendarPage } from '../detailcourse/calendar/calendar.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcoursesPageRoutingModule,
    CalendarPageModule
  ],
  declarations: [ListcoursesPage, CardCourseComponent, FilterPage],
  entryComponents: [FilterPage, CalendarPage],
  exports: []
  
})
export class ListcoursesPageModule {}
