import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  // { path: 'auth',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'new-login', pathMatch: 'full'
  //     },
  //     {
  //       path: 'new-login',
  //       loadChildren: () => import('./pages/auth/new-login/new-login.module').then( m => m.NewLoginPageModule)
  //     }
  //   ]
  // }, 
  {
    path: 'historylist',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/history/historylist/historylist.module').then( m => m.HistorylistPageModule)
      },
      {
        path: 'booking/:historyId',
        loadChildren: () => import('./pages/history/historybook/historybook.module').then( m => m.HistorybookPageModule)
      },
      {
        path: 'course/:historyId',
        loadChildren: () => import('./pages/history/historycourse/historycourse.module').then( m => m.HistorycoursePageModule)
      }

    ]
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'location/:locationId',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'location',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'listcourses/:locationId',
    loadChildren: () => import('./pages/location/course/listcourses/listcourses.module').then( m => m.ListcoursesPageModule)
  },
  {
    path: 'listcourses',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'detailcourse',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'detailcourse/:courseId',
    loadChildren: () => import('./pages/location/course/detailcourse/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'smstest',
    loadChildren: () => import('./pages/test/smstest/smstest.module').then( m => m.SmstestPageModule)
  },  
  {
    path: 'news/:newsId',
    loadChildren: () => import('./pages/newsdetail/newsdetail.module').then( m => m.NewsdetailPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },  
  {
    path: 'test',
    loadChildren: () => import('./pages/test/smstest/smstest.module').then( m => m.SmstestPageModule)
  },  {
    path: 'verify',
    loadChildren: () => import('./pages/auth/verify/verify.module').then( m => m.VerifyPageModule)
  }

  //questo lo lascio commentato, perchè in teoria ci si arriva solo da modale
  // {
  //   path: 'psw-recovery',
  //   loadChildren: () => import('./pages/auth/psw-recovery/psw-recovery.module').then( m => m.PswRecoveryPageModule)
  // }

  

 




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
