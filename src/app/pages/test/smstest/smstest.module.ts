import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmstestPageRoutingModule } from './smstest-routing.module';
import { SmstestPage } from './smstest.page';
import { SlottimeComponent } from 'src/app/shared/components/slottime/slottime.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmstestPageRoutingModule
    
  ],
  declarations: [SmstestPage, SlottimeComponent]
})
export class SmstestPageModule {}
