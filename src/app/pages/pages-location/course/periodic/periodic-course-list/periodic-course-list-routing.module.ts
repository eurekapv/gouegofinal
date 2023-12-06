import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicCourseListPage } from './periodic-course-list.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicCourseListPage
  },
  {
    path: 'filter',
    loadChildren: () => import('../periodic-course-list-filter/periodic-course-list-filter.module').then( m => m.PeriodicCourseListFilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicCourseListPageRoutingModule {}
