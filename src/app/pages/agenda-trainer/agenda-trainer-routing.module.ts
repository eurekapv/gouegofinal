import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaTrainerPage } from './agenda-trainer.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaTrainerPage
  },
  {
    path: ':pianificazioneCorsoId',
    loadChildren: () => import('./agenda-trainer-detail/agenda-trainer-detail.module').then( m => m.AgendaTrainerDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaTrainerPageRoutingModule {}
