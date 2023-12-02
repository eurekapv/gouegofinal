import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMinutiAccountPageRoutingModule } from './list-minuti-account-routing.module';

import { ListMinutiAccountPage } from './list-minuti-account.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMinutiAccountPageRoutingModule,
    SharedComponentsModule,
    PipesModule
  ],
  declarations: [ListMinutiAccountPage]
})
export class ListMinutiAccountPageModule {}
