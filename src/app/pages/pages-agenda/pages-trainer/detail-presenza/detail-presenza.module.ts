import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPresenzaPageRoutingModule } from './detail-presenza-routing.module';

import { DetailPresenzaPage } from './detail-presenza.page';
import { SharedComponentsModule } from "../../../../shared/components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPresenzaPageRoutingModule,
    SharedComponentsModule
],
  declarations: [DetailPresenzaPage]
})
export class DetailPresenzaPageModule {}
