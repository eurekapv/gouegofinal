import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportlevelsPageRoutingModule } from './sport-levels-account-routing.module';

import { SportLevelsAccountPage } from './sport-levels-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportlevelsPageRoutingModule
  ],
  declarations: [SportLevelsAccountPage]
})
export class SportLevelsAccountPageModule {}
