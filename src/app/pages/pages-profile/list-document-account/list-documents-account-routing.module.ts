import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDocumentsAccountPage } from './list-documents-account.page';

const routes: Routes = [
  {
    path: '',
    component: ListDocumentsAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPageRoutingModule {}
