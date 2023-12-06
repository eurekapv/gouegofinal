import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicCourseSubscribePage } from './periodic-course-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicCourseSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicCourseSubscribePageRoutingModule {}
