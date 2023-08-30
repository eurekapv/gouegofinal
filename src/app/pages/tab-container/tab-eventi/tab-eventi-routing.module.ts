import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEventiPage } from './tab-eventi.page';

const routes: Routes = [
  {
    path: '',
    component: TabEventiPage
  },
  {
    path: 'evento-detail/:id',
    loadChildren: () => import('../../pages-eventi/evento-detail/evento-detail.module').then( m => m.EventoDetailPageModule)
  },
  {
    path: 'news-detail/:id',
    loadChildren: () => import('../../pages-eventi/news-detail/news-detail.module').then( m => m.NewsdetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEventiPageRoutingModule {}
