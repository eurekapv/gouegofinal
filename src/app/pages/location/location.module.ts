import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationPageRoutingModule } from './location-routing.module';
import { LocationPage } from './location.page';
import { CampiNewPageModule } from './campi-new/campi-new.module'
import { PipesModule } from '../../shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ImageModalPageModule } from '../image-modal/image-modal.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LocationPageRoutingModule,
        PipesModule,
        
        CampiNewPageModule,
        FormsModule,
        SharedComponentsModule,
        ImageModalPageModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        LocationPage
    ]
})
export class LocationPageModule {}
