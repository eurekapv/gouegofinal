import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';

import { ApertureComponent } from '../../shared/components/aperture/aperture.component';
import { GalleryPage } from './gallery/gallery.page';
import { GalleryPageModule } from './gallery/gallery.module';
import { CampiPage } from './campi/campi.page';
import { CampiPageModule } from './campi/campi.module';
import { CampiNewPageModule } from './campi-new/campi-new.module'
import { CampiNewPage } from './campi-new/campi-new.page'


import { PipesModule } from '../../shared/pipes/pipes.module';
import { HomePageModule } from '../home/home.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    PipesModule,
    HomePageModule,
    GalleryPageModule,
    CampiPageModule,
    CampiNewPageModule
    
  ],
  declarations: [LocationPage, 
                  ApertureComponent,  
                  ],
  entryComponents: [GalleryPage, CampiPage, CampiNewPage]
  
  
})
export class LocationPageModule {}
