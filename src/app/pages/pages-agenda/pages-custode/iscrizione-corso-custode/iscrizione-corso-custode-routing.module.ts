import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IscrizioneCorsoCustodePage } from './iscrizione-corso-custode.page';

const routes: Routes = [
  {
    path: '',
    component: IscrizioneCorsoCustodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IscrizioneCorsoCustodePageRoutingModule {}
