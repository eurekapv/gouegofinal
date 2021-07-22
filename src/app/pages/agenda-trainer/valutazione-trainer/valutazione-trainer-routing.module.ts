import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValutazioneTrainerPage } from './valutazione-trainer.page';

const routes: Routes = [
  {
    path: '',
    component: ValutazioneTrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValutazioneTrainerPageRoutingModule {}
