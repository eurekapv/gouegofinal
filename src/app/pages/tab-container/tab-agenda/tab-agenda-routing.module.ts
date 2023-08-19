import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAgendaPage } from './tab-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: TabAgendaPage
  },
  {
    path: 'trainer/detail-valutazione/:corsoId',
    loadChildren: () => import('../../pages-agenda/pages-trainer/detail-valutazione/detail-valutazione.module').then( m => m.DetailValutazionePageModule)
  }, 
  {
    path: 'trainer/detail-presenza/:pianificazioneCorsoId',
    loadChildren: () => import('../../pages-agenda/pages-trainer/detail-presenza/detail-presenza.module').then( m => m.DetailPresenzaPageModule)
  },   
  {
    path: 'trainer/list-valutazioni',
    loadChildren: () => import('../../pages-agenda/pages-trainer/list-valutazioni/list-valutazioni.module').then( m => m.ListValutazioniPageModule)
  },
  {
    path: 'custode/detail-occupazione/:pianificazioneId',
    loadChildren: () => import('../../pages-agenda/pages-custode/agenda-custode-details/agenda-custode-details.module').then( m => m.AgendaCustodeDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAgendaPageRoutingModule {}
