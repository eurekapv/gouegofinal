import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationCourseListPageRoutingModule } from './location-course-list-routing.module';
import { LocationCourseListPage } from './location-course-list.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CourseListFilterPageModule } from './course-list-filter/course-list-filter.module';
import { LocationCourseSubscribePageModule } from '../location-course-subscribe/location-course-subscribe.module';





@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationCourseListPageRoutingModule,
        LocationCourseSubscribePageModule,
        CourseListFilterPageModule,
        SharedComponentsModule,
    ],
    declarations: [LocationCourseListPage],
    exports: []
})
export class LocationCourseListPageModule {}
