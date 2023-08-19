import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryCoursePage } from './history-course.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryCoursePageRoutingModule {}
