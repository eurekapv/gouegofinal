import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppstartHomePage } from './appstart-home.page';

const routes: Routes = [
  {
    path: 'appstart-home',
    component: AppstartHomePage,
    children:[      
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-container/tab-home/tab-home.module').then( m => m.TabHomePageModule)
      },
      {
        path: 'tab-agenda',
        loadChildren: () => import('../tab-container/tab-agenda/tab-agenda.module').then( m => m.TabAgendaPageModule)
      },     
      {
        path: 'tab-eventi',
        loadChildren: () => import('../tab-container/tab-eventi/tab-eventi.module').then( m => m.TabEventiPageModule)
      },       
      {
        path: 'tab-shop',
        loadChildren: () => import('../tab-container/tab-shop/tab-shop.module').then( m => m.TabShopPageModule)
      },  
      {
        path: 'tab-profile',
        loadChildren: () => import('../tab-container/tab-profile/tab-profile.module').then( m => m.TabProfilePageModule)
      },                 
      {
        path: '',
        redirectTo: '/appstart-home/tab-home',
        pathMatch: 'full'
      }    
    ]
  },
  {
    path: '',
    redirectTo: '/appstart-home/tab-home',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppstartHomePageRoutingModule {}
