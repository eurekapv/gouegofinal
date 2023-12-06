import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicCourseSubscribePageRoutingModule } from './periodic-course-subscribe-routing.module';

import { PeriodicCourseSubscribePage } from './periodic-course-subscribe.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PeriodicCourseSubscribePageRoutingModule,
        PipesModule,
        SharedComponentsModule
    ],
    declarations: [PeriodicCourseSubscribePage],
    exports: [PeriodicCourseSubscribePage]
})
export class PeriodicCourseSubscribePageModule {}
