import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPresenzaPage } from './detail-presenza.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPresenzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPresenzaPageRoutingModule {}
