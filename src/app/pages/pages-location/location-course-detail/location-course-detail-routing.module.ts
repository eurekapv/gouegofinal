import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationCourseDetailPage } from './location-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LocationCourseDetailPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationCourseDetailPageRoutingModule {}
