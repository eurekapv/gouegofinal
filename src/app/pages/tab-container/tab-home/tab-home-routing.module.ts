import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
  },
  {
    path: 'location/detail/:locationId',
    loadChildren: () => import('../../pages-location/location-detail/location-detail.module').then( m => m.LocationDetailPageModule)
  },
  {
    path: 'location/booking/:locationId',
    loadChildren: () => import('../../pages-location/location-booking/location-booking/location-booking.module').then( m => m.LocationBookingPageModule)
  },
  {
    path: 'location/courselist/:locationId',
    loadChildren: () => import('../../pages-location/course/periodic/periodic-course-list/periodic-course-list.module').then(m => m.PeriodicCourseListPageModule)
  },
  {
    path: 'location/coursedetail/:courseId',
    loadChildren: () => import('../../pages-location/course/periodic/periodic-course-detail/periodic-course-detail.module').then(m => m.PeriodicCourseDetailPageModule)
  },
  {
    path: 'location/dailycourselist/:locationId',
    loadChildren: () => import('../../pages-location/course/daily/daily-course-list/daily-course-list.module').then(m => m.DailyCourseListPageModule)
  }
  
];
//Provare a fare debug qui
//https://dev.to/manthanank/router-debugging-in-angular-4abd

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
