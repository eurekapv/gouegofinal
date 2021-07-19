import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookcoursePage } from './bookcourse.page';

const routes: Routes = [
  {
    path: '',
    component: BookcoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookcoursePageRoutingModule {}
