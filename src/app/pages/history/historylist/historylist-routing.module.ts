import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorylistPage } from './historylist.page';

const routes: Routes = [
  {
    path: '',
    component: HistorylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorylistPageRoutingModule {}
