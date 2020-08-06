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

import { QRCodeModule } from 'angularx-qrcode';


import localeIt from '@angular/common/locales/it';
import { PayPal } from '@ionic-native/paypal/ngx';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CryptoService } from './library/services/crypto.service';



registerLocaleData(localeIt,'it');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            FormsModule,
            HttpClientModule,
            IonicModule.forRoot(), 
            IonicStorageModule.forRoot(),
            AppRoutingModule,
            QRCodeModule       
            ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'it' },
    PayPal,
    SocialSharing,
    CryptoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

