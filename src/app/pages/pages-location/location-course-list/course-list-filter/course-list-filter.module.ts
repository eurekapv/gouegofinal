import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CourseListFilterPageRoutingModule } from './course-list-filter-routing.module';
import { CourseListFilterPage } from './course-list-filter.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseListFilterPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseListFilterPage],
  exports: [CourseListFilterPage]
})
export class CourseListFilterPageModule {}
