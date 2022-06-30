import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCustodePageRoutingModule } from './agenda-custode-routing.module';

import { AgendaCustodePage } from './agenda-custode.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedComponentsModule,
        AgendaCustodePageRoutingModule,
        
    ],
    declarations: [AgendaCustodePage],
    providers: [BarcodeScanner]
})
export class AgendaCustodePageModule {}
