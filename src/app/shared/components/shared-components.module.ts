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
import { ItemTrainerCorsoComponent } from './item-corso-trainer/item-trainer-corso.component';
import { DtinputComponent } from './dtinput/dtinput.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/**
 * Questo modulo, come quello delle pipes, dichiara tutti i componenti e li esporta;
 * è possibile importarlo in altri moduli per utilizzare i componenti all'interno degli stessi
 */
import {SwiperDirective} from "../directives/swiper.directive";
import { ImpegniCollaboratoriComponent } from './impegni-collaboratori/impegni-collaboratori.component';
import { ImpegniCustodiComponent } from './impegni-custodi/impegni-custodi.component';
import { MaskitoModule } from '@maskito/angular';
import { TableEventiComponent } from './table-eventi/table-evento.component';
import { TableArticoliComponent } from './table-articoli/table-articoli.component';
import { TableItemArticoloComponent } from './table-item-articolo/table-item-articolo.component';
import { CardImageComponent } from './card-image/card-image.component';
import { PipesModule } from '../pipes/pipes.module';
import { DurataChooserComponent } from './durata-chooser/durata-chooser.component';


@NgModule({

    //commonModule serve sempre per rendere visibile questo module all'esterno
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaskitoModule,
        PipesModule
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
        ImpegniCollaboratoriComponent,
        ImpegniCustodiComponent,
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
        ItemTrainerCorsoComponent,
        DtinputComponent,
        QrCodeScannerComponent,
        SwiperDirective,
        TableEventiComponent,
        TableArticoliComponent,
        TableItemArticoloComponent,
        CardImageComponent,
        DurataChooserComponent
        
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
        ImpegniCollaboratoriComponent,
        ImpegniCustodiComponent,
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
        ItemTrainerCorsoComponent,
        DtinputComponent,
        QrCodeScannerComponent,
        SwiperDirective,
        TableEventiComponent,
        TableArticoliComponent,
        TableItemArticoloComponent,
        CardImageComponent,
        DurataChooserComponent
    ]
})
export class SharedComponentsModule {}
