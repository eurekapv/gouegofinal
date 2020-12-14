import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaCustodePage } from './agenda-custode.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaCustodePage
  },
  {
    path: 'filter-custode',
    loadChildren: () => import('./filter-custode/filter-custode.module').then( m => m.FilterCustodePageModule)
  },
  {
    path: ':idPianificazione',
    loadChildren: () => import('./agenda-custode-details/agenda-custode-details.module').then( m => m.AgendaCustodeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaCustodePageRoutingModule {}
