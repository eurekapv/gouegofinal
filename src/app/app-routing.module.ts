import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
      }
    ]
  }, 
  {
    path: 'historylist',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/history/historylist/historylist.module').then( m => m.HistorylistPageModule)
      },
      {
        path: ':historyId',
        loadChildren: () => import('./pages/history/historydetail/historydetail.module').then( m => m.HistorydetailPageModule)
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
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
