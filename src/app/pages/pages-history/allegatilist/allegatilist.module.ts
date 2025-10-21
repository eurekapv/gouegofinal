import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllegatilistPageRoutingModule } from './allegatilist-routing.module';

import { AllegatilistPage } from './allegatilist.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllegatilistPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [AllegatilistPage]
})
export class AllegatilistPageModule {}