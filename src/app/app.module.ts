import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { CryptoService } from './library/services/crypto.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




registerLocaleData(localeIt,'it');

//innerHTMLTemplatesEnabled: true Consente di indicare Html in componenti come
//ion-alert, ion-infinite-scroll-content, ion-loading, ion-refresher-content, and ion-toast

@NgModule({ declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        FormsModule,
        IonicModule.forRoot({
            innerHTMLTemplatesEnabled: true,
            backButtonText: 'Indietro'
        }),
        AppRoutingModule,
        ], 
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: LOCALE_ID, useValue: 'it' },
        CryptoService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}

