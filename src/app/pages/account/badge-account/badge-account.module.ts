import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeAccountPageRoutingModule } from './badge-account-routing.module';

import { BadgeAccountPage } from './badge-account.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeAccountPageRoutingModule,
    QRCodeModule
  ],
  declarations: [BadgeAccountPage]
})
export class BadgeAccountPageModule {}
