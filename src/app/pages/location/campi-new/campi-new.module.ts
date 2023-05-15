import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CampiNewPageRoutingModule } from './campi-new-routing.module';
import { CampiNewPage } from './campi-new.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CampiNewPageRoutingModule,
    
    FormsModule,
    PipesModule,
    SharedComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CampiNewPage]
})
export class CampiNewPageModule {}
