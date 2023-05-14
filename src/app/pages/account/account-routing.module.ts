import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'sportlevels',
    loadChildren: () => import('./sportlevels/sportlevels.module').then( m => m.SportlevelsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  },
  {
    path: 'edit-login',
    loadChildren: () => import('./edit-login/edit-login.module').then( m => m.EditLoginPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },  {
    path: 'club-cards',
    loadChildren: () => import('./club-cards/club-cards.module').then( m => m.ClubCardsPageModule)
  },
  {
    path: 'badge-account',
    loadChildren: () => import('./badge-account/badge-account.module').then( m => m.BadgeAccountPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
