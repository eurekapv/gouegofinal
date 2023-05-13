import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubCardsPageRoutingModule } from './club-cards-routing.module';

import { ClubCardsPage } from './club-cards.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubCardsPageRoutingModule,
    QRCodeModule
  ],
  declarations: [ClubCardsPage]
})
export class ClubCardsPageModule {}
