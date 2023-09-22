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
    path: 'custode/detail-occupazione/:impegoCustodeId',
    loadChildren: () => import('../../pages-agenda/pages-custode/agenda-custode-details/agenda-custode-details.module').then( m => m.AgendaCustodeDetailsPageModule)
  },
  {
    path: 'custode/iscrizione-corso-custode/:iscrizioneId',
    loadChildren: () => import('../../pages-agenda/pages-custode/iscrizione-corso-custode/iscrizione-corso-custode.module').then( m => m.IscrizioneCorsoCustodePageModule)
  },
  {
    path: 'history-list',
    loadChildren: () => import('../../pages-history/history-list/history-list.module').then( m => m.HistoryListPageModule)
  },
  {
    path: 'history-booking/:historyId',
    loadChildren: () => import('../../pages-history/history-booking/history-booking.module').then( m => m.HistoryBookingPageModule)
  },
  {
    path: 'history-course/:historyId',
    loadChildren: () => import('../../pages-history/history-course/history-course.module').then( m => m.HistoryCoursePageModule)
  },
  {
    path: 'customer/customer-detail/:customerId',
    loadChildren: () => import('../../pages-customer/customer-detail/customer-detail.module').then( m => m.CustomerDetailPageModule)
  },  
  {
    path: 'customer/customer-list',
    loadChildren: () => import('../../pages-customer/customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAgendaPageRoutingModule {}
