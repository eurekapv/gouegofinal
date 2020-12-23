import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterCustodePage } from './filter-custode.page';

const routes: Routes = [
  {
    path: '',
    component: FilterCustodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterCustodePageRoutingModule {}
