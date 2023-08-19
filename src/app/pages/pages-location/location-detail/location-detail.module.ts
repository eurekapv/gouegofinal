import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationDetailPageRoutingModule } from './location-detail-routing.module';
import { LocationDetailPage } from './location-detail.page';
import { LocationCampiListPageModule } from '../location-campi-list/location-campi-list.module'
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ImageModalPageModule } from '../../image-modal/image-modal.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LocationDetailPageRoutingModule,
        PipesModule,
        
        LocationCampiListPageModule,
        FormsModule,
        SharedComponentsModule,
        ImageModalPageModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        LocationDetailPage
    ]
})
export class LocationDetailPageModule {}
