import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubCardsPage } from './club-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ClubCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubCardsPageRoutingModule {}
