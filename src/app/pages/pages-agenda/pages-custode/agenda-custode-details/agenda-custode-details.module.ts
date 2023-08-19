import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCustodeDetailsPageRoutingModule } from './agenda-custode-details-routing.module';

import { AgendaCustodeDetailsPage } from './agenda-custode-details.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaCustodeDetailsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AgendaCustodeDetailsPage]
})
export class AgendaCustodeDetailsPageModule {}
