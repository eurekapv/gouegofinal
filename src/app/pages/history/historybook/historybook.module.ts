import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorybookPageRoutingModule } from './historybook-routing.module';

import { HistorybookPage } from './historybook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorybookPageRoutingModule
  ],
  declarations: [HistorybookPage]
})
export class HistorybookPageModule {}
