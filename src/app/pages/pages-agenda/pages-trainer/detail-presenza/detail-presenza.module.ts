import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPresenzaPageRoutingModule } from './detail-presenza-routing.module';

import { DetailPresenzaPage } from './detail-presenza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPresenzaPageRoutingModule
  ],
  declarations: [DetailPresenzaPage]
})
export class DetailPresenzaPageModule {}
