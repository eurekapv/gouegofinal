import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyCourseListPage } from './daily-course-list.page';

const routes: Routes = [
  {
    path: '',
    component: DailyCourseListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyCourseListPageRoutingModule {}
