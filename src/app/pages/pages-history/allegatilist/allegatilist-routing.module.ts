import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllegatilistPage } from './allegatilist.page';

const routes: Routes = [
  {
    path: '',
    component: AllegatilistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllegatilistPageRoutingModule {}
