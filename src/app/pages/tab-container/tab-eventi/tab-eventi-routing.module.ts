import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEventiPage } from './tab-eventi.page';

const routes: Routes = [
  {
    path: '',
    component: TabEventiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEventiPageRoutingModule {}
