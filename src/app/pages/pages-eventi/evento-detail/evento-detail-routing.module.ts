import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoDetailPage } from './evento-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EventoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoDetailPageRoutingModule {}
