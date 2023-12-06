import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PeriodicCourseListPageRoutingModule } from './periodic-course-list-routing.module';
import { PeriodicCourseListPage } from './periodic-course-list.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PeriodicCourseListFilterPageModule } from '../periodic-course-list-filter/periodic-course-list-filter.module';
import { PeriodicCourseSubscribePageModule } from '../periodic-course-subscribe/periodic-course-subscribe.module';





@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PeriodicCourseListPageRoutingModule,
        PeriodicCourseSubscribePageModule,
        PeriodicCourseListFilterPageModule,
        SharedComponentsModule,
    ],
    declarations: [PeriodicCourseListPage],
    exports: []
})
export class PeriodicCourseListPageModule {}
