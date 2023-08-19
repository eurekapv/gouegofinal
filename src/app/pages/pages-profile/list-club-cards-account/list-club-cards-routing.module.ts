import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClubCardsPage } from './list-club-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ListClubCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubCardsPageRoutingModule {}
