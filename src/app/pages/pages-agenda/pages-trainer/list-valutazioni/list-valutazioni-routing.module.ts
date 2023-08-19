import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListValutazioniPage } from './list-valutazioni.page';

const routes: Routes = [
  {
    path: '',
    component: ListValutazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListValutazioniPageRoutingModule {}
