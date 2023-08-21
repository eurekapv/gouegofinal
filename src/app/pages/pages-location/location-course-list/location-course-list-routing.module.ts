import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationCourseListPage } from './location-course-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocationCourseListPage
  },
  {
    path: 'filter',
    loadChildren: () => import('./course-list-filter/course-list-filter.module').then( m => m.CourseListFilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationCourseListPageRoutingModule {}
