import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaTrainerDetailPage } from './agenda-trainer-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaTrainerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaTrainerDetailPageRoutingModule {}
