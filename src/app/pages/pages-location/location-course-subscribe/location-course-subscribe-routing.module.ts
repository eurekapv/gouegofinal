import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationCourseSubscribePage } from './location-course-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: LocationCourseSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationCourseSubscribePageRoutingModule {}
