import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcoursesPageRoutingModule } from './listcourses-routing.module';

import { ListcoursesPage } from './listcourses.page';
import { FilterPage } from './filter/filter.page';
import { FilterPageModule } from './filter/filter.module';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcoursesPageRoutingModule,

    FilterPageModule,
    SharedComponentsModule
    
  ],
  declarations: [ListcoursesPage],
  entryComponents: [FilterPage],
  exports: []
  
})
export class ListcoursesPageModule {}
