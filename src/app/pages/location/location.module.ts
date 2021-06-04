import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';

import { GalleryPage } from './gallery/gallery.page';
import { GalleryPageModule } from './gallery/gallery.module';
import { CampiNewPageModule } from './campi-new/campi-new.module'
import { CampiNewPage } from './campi-new/campi-new.page'


import { PipesModule } from '../../shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LocationPageRoutingModule,

    PipesModule,
    GalleryPageModule,
    CampiNewPageModule,
    FormsModule,
    SharedComponentsModule
    
  ],
  declarations: [
    LocationPage
    ],

  entryComponents: [GalleryPage, CampiNewPage]
  
  
})
export class LocationPageModule {}
