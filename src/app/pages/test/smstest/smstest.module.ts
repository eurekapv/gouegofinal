import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmstestPageRoutingModule } from './smstest-routing.module';

import { SmstestPage } from './smstest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmstestPageRoutingModule
  ],
  declarations: [SmstestPage]
})
export class SmstestPageModule {}
