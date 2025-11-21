import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/appstart-home/appstart-home.module').then( m => m.AppstartHomePageModule)
  },
  {
    path: 'list-shop-account',
    loadChildren: () => import('./pages/pages-profile/list-shop-account/list-shop-account.module').then( m => m.ListShopAccountPageModule)
  },
  {
    path: 'detail-shop-account/:orderId',
    loadChildren: () => import('./pages/pages-profile/detail-shop-account/detail-shop-account.module').then( m => m.DetailShopAccountPageModule)
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
