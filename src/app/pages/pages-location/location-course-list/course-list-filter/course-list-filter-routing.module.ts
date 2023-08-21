import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListFilterPage } from './course-list-filter.page';

const routes: Routes = [
  {
    path: '',
    component: CourseListFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseListFilterPageRoutingModule {}
