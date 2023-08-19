import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEventiPageRoutingModule } from './tab-eventi-routing.module';

import { TabEventiPage } from './tab-eventi.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEventiPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [TabEventiPage]
})
export class TabEventiPageModule {}
