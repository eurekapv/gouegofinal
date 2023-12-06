import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/appstart-home/appstart-home.module').then( m => m.AppstartHomePageModule)
  },
  {
    path: 'dayily-course-list',
    loadChildren: () => import('./pages/pages-location/course/daily/daily-course-list/daily-course-list.module').then( m => m.DailyCourseListPageModule)
  },

  
 



 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
