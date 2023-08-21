import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailCalendarPage } from './course-detail-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailCalendarPageRoutingModule {}
