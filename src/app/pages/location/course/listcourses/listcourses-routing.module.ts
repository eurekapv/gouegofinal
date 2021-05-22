import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcoursesPage } from './listcourses.page';

const routes: Routes = [
  {
    path: '',
    component: ListcoursesPage
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcoursesPageRoutingModule {}
