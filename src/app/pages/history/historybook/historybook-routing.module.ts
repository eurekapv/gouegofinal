import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorybookPage } from './historybook.page';

const routes: Routes = [
  {
    path: '',
    component: HistorybookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorybookPageRoutingModule {}
