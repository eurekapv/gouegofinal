import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterCustodePageRoutingModule } from './filter-custode-routing.module';

import { FilterCustodePage } from './filter-custode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterCustodePageRoutingModule
  ],
  declarations: [FilterCustodePage]
})
export class FilterCustodePageModule {}
