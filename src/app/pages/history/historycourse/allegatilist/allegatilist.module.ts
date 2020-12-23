import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllegatilistPageRoutingModule } from './allegatilist-routing.module';

import { AllegatilistPage } from './allegatilist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllegatilistPageRoutingModule
  ],
  declarations: [AllegatilistPage]
})
export class AllegatilistPageModule {}
