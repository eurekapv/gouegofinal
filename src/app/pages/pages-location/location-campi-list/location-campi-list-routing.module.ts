import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationCampiListPage } from './location-campi-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocationCampiListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationCampiListPageRoutingModule {}
