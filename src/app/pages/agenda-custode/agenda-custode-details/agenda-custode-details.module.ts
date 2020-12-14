import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCustodeDetailsPageRoutingModule } from './agenda-custode-details-routing.module';

import { AgendaCustodeDetailsPage } from './agenda-custode-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaCustodeDetailsPageRoutingModule
  ],
  declarations: [AgendaCustodeDetailsPage]
})
export class AgendaCustodeDetailsPageModule {}
