import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';

import { ApertureComponent } from '../../shared/components/aperture/aperture.component';
import { GalleryPage } from './gallery/gallery.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule
    
  ],
  declarations: [LocationPage, ApertureComponent, GalleryPage],
  entryComponents: [GalleryPage]
  
  
})
export class LocationPageModule {}
