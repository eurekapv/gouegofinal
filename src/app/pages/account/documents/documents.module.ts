import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chooser } from '@ionic-native/chooser/ngx';

import { UploadComponent } from 'src/app/shared/components/upload/upload.component';


import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPageRoutingModule
  ],
  declarations: [DocumentsPage, UploadComponent],
  providers: [Chooser],
  entryComponents: [UploadComponent]
})
export class DocumentsPageModule {}
