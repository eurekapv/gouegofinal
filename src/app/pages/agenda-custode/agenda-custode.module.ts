import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCustodePageRoutingModule } from './agenda-custode-routing.module';

import { AgendaCustodePage } from './agenda-custode.page';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FilterCustodePageModule } from './filter-custode/filter-custode.module';
import { FilterCustodePage } from './filter-custode/filter-custode.page';
import { QRCodeModule } from 'angularx-qrcode';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    AgendaCustodePageRoutingModule,
    FilterCustodePageModule,
  ],
  declarations: [AgendaCustodePage],
  entryComponents: [FilterCustodePage],
  providers: [QRScanner]
})
export class AgendaCustodePageModule {}
