import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppstartHomePageRoutingModule } from './appstart-home-routing.module';

import { AppstartHomePage } from './appstart-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppstartHomePageRoutingModule
  ],
  declarations: [AppstartHomePage]
})
export class AppstartHomePageModule {}
