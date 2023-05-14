import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AdvertisingComponent } from './advertising/advertising.component'
import { ApertureComponent } from './aperture/aperture.component'
import { ButtonCardComponent } from './button-card/button-card.component'
import { CalendarscrollComponent } from './calendarscroll/calendarscroll.component'
import { CardCourseComponent } from './card-course/card-course.component'
import { CentriComponent } from './centri/centri.component'
import { CircularComponent } from './circular/circular.component'
import { FootbookedComponent } from './footbooked/footbooked.component'
import { HorTimelineComponent } from './hor-timeline/hor-timeline.component'
import { ImpegniComponent } from './impegni/impegni.component'
import { ItemCalendarioComponent } from './item-calendario/item-calendario.component'
import { NewsEventiComponent } from './news-eventi/news-eventi.component'
import { PaymentChooseComponent } from './payment-choose/payment-choose.component'
import { PlayerNumberComponent } from './player-number/player-number.component'
import { SlottimeComponent } from './slottime/slottime.component'
import { SportScrollComponent } from './sport-scroll/sport-scroll.component'
import { UploadComponent } from './upload/upload.component'
import { AlertInputPrezzoComponent } from './alert-input-prezzo/alert-input-prezzo.component';
import { CampiScrollComponent } from './campi-scroll/campi-scroll.component';
import { HideHeaderDirective } from '../directives/hide-header.directive';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { SettimanaBlockComponent } from './settimana-block/settimana-block.component';
import { LevelSetterComponent } from './level-setter/level-setter.component';
import { ItemAgendaTrainerComponent } from './item-agenda-trainer/item-agenda-trainer.component';
import { DtinputComponent } from './dtinput/dtinput.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/**
 * Questo modulo, come quello delle pipes, dichiara tutti i componenti e li esporta;
 * è possibile importarlo in altri moduli per utilizzare i componenti all'interno degli stessi
 */


@NgModule({

    //commonModule serve sempre per rendere visibile questo module all'esterno
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],    
    declarations: [
        AdvertisingComponent,
        ApertureComponent,
        ButtonCardComponent,
        CalendarscrollComponent,
        CardCourseComponent,
        CentriComponent,
        CircularComponent,
        FootbookedComponent,
        HorTimelineComponent,
        ImpegniComponent,
        ItemCalendarioComponent,
        NewsEventiComponent,
        PaymentChooseComponent,
        PaymentModeComponent,
        PlayerNumberComponent,
        SlottimeComponent,
        SportScrollComponent,
        UploadComponent,
        AlertInputPrezzoComponent,
        CampiScrollComponent,
        HideHeaderDirective,
        SettimanaBlockComponent,
        LevelSetterComponent,
        ItemAgendaTrainerComponent,
        DtinputComponent,
        QrCodeScannerComponent
        
    ],
    exports: [
        AdvertisingComponent,
        ApertureComponent,
        ButtonCardComponent,
        CalendarscrollComponent,
        CardCourseComponent,
        CentriComponent,
        CircularComponent,
        FootbookedComponent,
        HorTimelineComponent,
        ImpegniComponent,
        ItemCalendarioComponent,
        NewsEventiComponent,
        PaymentChooseComponent,
        PaymentModeComponent,
        PlayerNumberComponent,
        SlottimeComponent,
        SportScrollComponent,
        AlertInputPrezzoComponent,
        UploadComponent,
        CampiScrollComponent,
        HideHeaderDirective,
        SettimanaBlockComponent,
        LevelSetterComponent,
        ItemAgendaTrainerComponent,
        DtinputComponent,
        QrCodeScannerComponent
    ]
})
export class SharedComponentsModule {}
