import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicCourseDetailCalendarPage } from './periodic-course-detail-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicCourseDetailCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicCourseDetailCalendarPageRoutingModule {}
