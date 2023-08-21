import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationCourseSubscribePageRoutingModule } from './location-course-subscribe-routing.module';

import { LocationCourseSubscribePage } from './location-course-subscribe.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationCourseSubscribePageRoutingModule,
        PipesModule,
        SharedComponentsModule
    ],
    declarations: [LocationCourseSubscribePage],
    exports: [LocationCourseSubscribePage]
})
export class LocationCourseSubscribePageModule {}
