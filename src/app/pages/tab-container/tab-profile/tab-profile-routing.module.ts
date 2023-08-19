import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProfilePage } from './tab-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabProfilePage
  },
  {
    path: 'documents',
    
    loadChildren: () => import('../../pages-profile/list-document-account/list-documents-account.module').then( m => m.ListDocumentsAccountPageModule)
  },
  {
    path: 'sportlevels',
    loadChildren: () => import('../../pages-profile/sport-levels-account/sport-levels-account.module').then( m => m.SportLevelsAccountPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('../../pages-profile/edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  },
  {
    path: 'edit-login',
    loadChildren: () => import('../../pages-profile/edit-login/edit-login.module').then( m => m.EditLoginPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('../../pages-profile/list-invoices-account/list-invoices-account.module').then( m => m.ListInvoicesAccountPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('../../pages-profile/delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'club-cards',
    loadChildren: () => import('../../pages-profile/list-club-cards-account/list-club-cards.module').then( m => m.ListClubCardsPageModule)
  },
  {
    path: 'badge-account',
    loadChildren: () => import('../../pages-profile/badge-account/badge-account.module').then( m => m.BadgeAccountPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProfilePageRoutingModule {}
