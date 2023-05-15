import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppstartHomePage } from './appstart-home.page';

const routes: Routes = [
  {
    path: '',
    component: AppstartHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppstartHomePageRoutingModule {}
