import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt,'it');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            FormsModule,
            HttpClientModule,
            IonicModule.forRoot(), 
            IonicStorageModule.forRoot(),
            AppRoutingModule
            
            ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: LOCALE_ID, useValue: 'it' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * HELP COME TRADURRE IN ITALIANO
 * 
 * import { NgModule, LOCALE_ID } from '@angular/core';
 * 1) Importare LOCALE_ID oltre che NgModule
 * 
 * import { registerLocaleData } from '@angular/common';
 * import localeIt from '@angular/common/locales/it';
 * 2) Importare registerLocaleData e la lingua desiderata
 * N.B. Notare che non ci sono le graffe in localeIt (è un nome di fantasia)
 * 
 * registerLocaleData(localeIt,'it');
 * 3) Fuori da NgModule o Class registrare il nome di fantasia
 * con la sigla che Angular usa per la lingua (it per italiano, etc)
 * 
 * {provide: LOCALE_ID, useValue: 'it' }
 * 4) Aggiungere tra i provider il nuovo valore a LOCALE_ID
 */

/**
 * AGGIORNATI I MODULI A IONIC 5
 * 
 * Usare i due comandi:
 * 
 * npm update
 * 
 * npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
 * 
 * e poi ho installato lo Storage con
 * 
 * npm install --save @ionic/storage
 */

 /*
 02-03-2020
 Aggiunto il modulo moment.js per la gestione di date e orari
 
 npm install moment --save

 */
