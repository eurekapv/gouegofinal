import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicCourseDetailPage } from './periodic-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicCourseDetailPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicCourseDetailPageRoutingModule {}
