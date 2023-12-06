import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicCourseListFilterPage } from './periodic-course-list-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicCourseListFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicCourseListFilterPageRoutingModule {}
