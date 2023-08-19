import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailValutazionePage } from './detail-valutazione.page';

const routes: Routes = [
  {
    path: '',
    component: DetailValutazionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailValutazionePageRoutingModule {}
