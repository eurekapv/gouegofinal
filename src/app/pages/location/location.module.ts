import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { GalleryPageModule } from './gallery/gallery.module';
import { ApertureComponent } from '../../shared/components/aperture/aperture.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    GalleryPageModule
  ],
  declarations: [LocationPage, ApertureComponent]
  
  
})
export class LocationPageModule {}
