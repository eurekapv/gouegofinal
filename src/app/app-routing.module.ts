import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* ORIGINALI*/
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  
  // Ho provato a cambiare e mandare home al path vuoto (che carica la pagina Home)
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
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
    path: 'news/:newsId',
    loadChildren: () => import('./pages/newsdetail/newsdetail.module').then( m => m.NewsdetailPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },  
  {
    path: 'verify',
    loadChildren: () => import('./pages/auth/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'agenda-trainer',
    loadChildren: () => import('./pages/agenda-trainer/agenda-trainer.module').then( m => m.AgendaTrainerPageModule)
  },
  {
    path: 'agenda-custode',
    loadChildren: () => import('./pages/agenda-custode/agenda-custode.module').then( m => m.AgendaCustodePageModule)
  },
  // {
  //   path: 'agenda-custode/:idImpegno',
  // },  

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
