import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDetailPageRoutingModule } from './customer-detail-routing.module';

import { CustomerDetailPage } from './customer-detail.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDetailPageRoutingModule,
    SharedComponentsModule,
    QRCodeModule
  ],
  declarations: [CustomerDetailPage]
})
export class CustomerDetailPageModule {}
