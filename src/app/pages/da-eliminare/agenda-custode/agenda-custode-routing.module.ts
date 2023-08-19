import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaCustodePage } from './agenda-custode.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaCustodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaCustodePageRoutingModule {}
