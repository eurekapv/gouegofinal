import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage
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
    loadChildren: () => import('../../pages-location/location-course-list/location-course-list.module').then(m => m.LocationCourseListPageModule)
  },
  {
    path: 'location/coursedetail/:courseId',
    loadChildren: () => import('../../pages-location/location-course-detail/location-course-detail.module').then(m => m.LocationCourseDetailPageModule)
  }

  
    //   path: 'listcourses/:locationId',
    //   loadChildren: () => import('./pages/location/course/listcourses/listcourses.module').then( m => m.ListcoursesPageModule)
    // },
    // {
    //   path: 'listcourses',
    //   redirectTo: 'home', pathMatch: 'full'
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
