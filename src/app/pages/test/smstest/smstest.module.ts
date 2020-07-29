import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmstestPageRoutingModule } from './smstest-routing.module';
import { SmstestPage } from './smstest.page';
import { SlottimeComponent } from 'src/app/shared/components/slottime/slottime.component';
import { HomePageModule } from 'src/app/pages/home/home.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmstestPageRoutingModule,
    HomePageModule
    
  ],
  declarations: [SmstestPage]
})
export class SmstestPageModule {}
