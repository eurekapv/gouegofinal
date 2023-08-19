import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListValutazioniPageRoutingModule } from './list-valutazioni-routing.module';

import { ListValutazioniPage } from './list-valutazioni.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListValutazioniPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ListValutazioniPage]
})
export class ListValutazioniPageModule {}
