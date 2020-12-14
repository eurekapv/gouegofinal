import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaCustodeDetailsPage } from './agenda-custode-details.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaCustodeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaCustodeDetailsPageRoutingModule {}
