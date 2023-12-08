import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyCourseSubscribePage } from './daily-course-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: DailyCourseSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyCourseSubscribePageRoutingModule {}
