import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcoursesPageRoutingModule } from './listcourses-routing.module';

import { ListcoursesPage } from './listcourses.page';
import { CardCourseComponent } from 'src/app/shared/components/card-course/card-course.component';
import { FilterPage } from './filter/filter.page';
import { CalendarPage } from '../detailcourse/calendar/calendar.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcoursesPageRoutingModule
  ],
  declarations: [ListcoursesPage, CardCourseComponent, FilterPage, CalendarPage],
  entryComponents: [FilterPage, CalendarPage],
  exports: [CalendarPage]
  
})
export class ListcoursesPageModule {}
