import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PeriodicCourseListFilterPageRoutingModule } from './periodic-course-list-filter-routing.module';
import { PeriodicCourseListFilterPage } from './periodic-course-list-filter.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicCourseListFilterPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PeriodicCourseListFilterPage],
  exports: [PeriodicCourseListFilterPage]
})
export class PeriodicCourseListFilterPageModule {}
