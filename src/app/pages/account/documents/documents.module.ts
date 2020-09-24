import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chooser } from '@ionic-native/chooser/ngx';

import { UploadComponent } from 'src/app/shared/components/upload/upload.component';


import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPageRoutingModule
  ],
  declarations: [DocumentsPage,  UploadComponent],
  providers: [Chooser, File, FileOpener],
  entryComponents: [UploadComponent]
})
export class DocumentsPageModule {}
