import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DocumentsPageRoutingModule } from './list-documents-account-routing.module';
import { ListDocumentsAccountPage } from './list-documents-account.page';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentsPageRoutingModule,
        SharedComponentsModule
    ],
    declarations: [ListDocumentsAccountPage],
    providers: []
})
export class ListDocumentsAccountPageModule {}
