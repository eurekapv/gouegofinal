import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationCampiListPageRoutingModule } from './location-campi-list-routing.module';
import { LocationCampiListPage } from './location-campi-list.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LocationCampiListPageRoutingModule,
    
    FormsModule,
    PipesModule,
    SharedComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LocationCampiListPage]
})
export class LocationCampiListPageModule {}
