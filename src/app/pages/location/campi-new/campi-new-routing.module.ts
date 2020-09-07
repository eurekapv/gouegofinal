import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampiNewPage } from './campi-new.page';

const routes: Routes = [
  {
    path: '',
    component: CampiNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampiNewPageRoutingModule {}
