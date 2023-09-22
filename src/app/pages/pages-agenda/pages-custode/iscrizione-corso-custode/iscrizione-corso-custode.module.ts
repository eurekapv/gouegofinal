import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IscrizioneCorsoCustodePageRoutingModule } from './iscrizione-corso-custode-routing.module';

import { IscrizioneCorsoCustodePage } from './iscrizione-corso-custode.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IscrizioneCorsoCustodePageRoutingModule,
    SharedComponentsModule,
    PipesModule
  ],
  declarations: [IscrizioneCorsoCustodePage]
})
export class IscrizioneCorsoCustodePageModule {}
