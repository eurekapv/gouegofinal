# Per la preparazione dei pacchetti Mobile
ionic build --prod
npx cap sync
Il primo comando compila in Build e il secondo copia la www nei pacchetti
(Non usare altri comandi che fanno la build in test e non in prod)


# Gouego Application 

## Capacitor Cordova Plugin
---
  - cordova-plugin-screen-orientation
  - cordova-plugin-file-opener2
  - cordova-plugin-file
  - cordova-plugin-chooser
  - cordova plugin add com.paypal.cordova.mobilesdk
  - cordova-plugin-x-socialsharing
  - @ionic/pwa-elements
  - @ionic/storage@2.2.0
  - (cordova) phonegap-plugin-barcodescanner
---

## File capacitor.config.json
```json
//Background color of Capacitor WebView for both iOS and Android unless also declared inside ios or android objects
{
    "appId": "com.gouego.openBeach",
    "appName": "Open Beach",
    "backgroundColor": "#ffffffff",
    "ios": {
      "cordovaLinkerFlags": ["-ObjC"]
    }
}
```

## File AndroidManifest.xml

```xml
    <!-- android/app/src/main/AndroidManifest.xml -->
    <application
        android:largeHeap="true"
        android:usesCleartextTraffic="true">
    </application>
    <!-- Permissions -->
    <!--For Geolocation API-->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-feature android:name="android.hardware.location.gps" />
    <!-- CAMERA API -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```
## File Info.plist
```xml
	<key>NSCameraUsageDescription</key>
	<string>L'applicazione richiede accesso alla fotocamera o alla libreria foto per importare immagini o barcode</string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string>Consenti sempre geolocalizzazione per indicarti le location vicine ?</string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string>Consenti geolocalizzazione per mostrarti la location più vicina ?</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>To Record Audio With Video</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>L'applicazione richiede accesso alla fotocamera o alla libreria foto per importare immagini o barcode</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>L'applicazione richiede accesso alla fotocamera o alla libreria foto per importare immagini o barcode</string>
```


### 21/07/2021
#### MAC Compilation Error
Error: ./src/global.scss
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
TypeError: aSourceMapConsumer.originalPositionFor is not a function

Ho cancellato la cartella node_modules, ed ho reinstallato la cli
    sudo npm install -g @angular/cli

Eliminato il file package.json.lock e reinstallato i node_modules in legacy mode
    sudo npm install --legacy-peer-deps

Per evitare errori futuri ho modificato il file package.json
In devDependencies modificare la versione di "jasmine-core" 3.6.0 in ~3.8.0 e "karma-jasmine-html-reporter" da 1.5.0 a ~1.7.0.

    sudo npm update

L'errore sembra dvouto al cambio npm da versione 6 a 7

### 02/09/2020
#### Barcode Scanner
    npm install phonegap-plugin-barcodescanner
    npm install @ionic-native/barcode-scanner

### 02/09/2020
#### Pinch to Zoom 
    npm i ngx-pinch-zoom

### 06/08/2020
#### Installazione ScreenOrientation
    npm install --save cordova-plugin-screen-orientation

### 06/08/2020
#### Installazione FileOpener (per apertura documenti)
    npm install cordova-plugin-file-opener2
    npm install @ionic-native/file-opener

#### Installazione File (per apertura documenti)
    npm install cordova-plugin-file
    npm install @ionic-native/file

##### Fixare il FileOpener con jetify
    npx jetify



### 06/08/2020
#### Installazione "Choser" (per caricamento documenti)
    npm install cordova-plugin-chooser
    npm install @ionic-native/chooser
```javascript
//Aggiungere in android/app/src/main/AndroidManifest.xml
<application android:largeHeap="true" />
```


### 06/08/2020
#### Installazione Paypal
    ionic cordova plugin add com.paypal.cordova.mobilesdk
    npm install @ionic-native/paypal

```javascript
Modificare il file capacitor.config.json
"ios": {
  "cordovaLinkerFlags": ["-ObjC"]
}
```

### 06/08/2020
#### Aggiunto il modulo per criptare stringhe
    npm install crypto-js
    npm install @types/crypto-js
```javascript
//Nel file angular.json
architect.build.options.scripts
"scripts": [
              "node_modules/crypto-js/crypto-js.js"
            ]
```

### 01/07/2020
#### Aggiunto plugin per Social Sharing
    npm install cordova-plugin-x-socialsharing
    npm install @ionic-native/social-sharing
    npm install jetifier
    npx jetifier
```javascript
//aggiunto SocialSharing all'array "providers" nell'app.module.ts
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
    CryptoService,
    File,
    FileOpener,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```


### 29/06/2020
##### Aggiunto un modulo che consente di caricare gli script in maniera dinamica
    npm i scriptjs
##### Utilizzato per caricare il file JS per Paypal versione Web

```javascript
import { get } from 'scriptjs';
ngOnInit() {

    get("assets/js/searchEmp.js", () => {
        getSerchInspContext = this;
        loadSearchEmp();
    });
}
```

### 24/06/2020
##### Utilizzo LOCALE_ID per traduzioni
```javascript
//Importare LOCALE_ID oltre che NgModule in app.module.ts
import { NgModule, LOCALE_ID } from '@angular/core';
//


/*Importare registerLocaleData e la lingua desiderata
 N.B. Notare che non ci sono le graffe in localeIt (è un nome di fantasia)*/
 import { registerLocaleData } from '@angular/common';
 import localeIt from '@angular/common/locales/it';
//


 /*Fuori da NgModule o Class registrare il nome di fantasia
 con la sigla che Angular usa per la lingua (it per italiano, etc)*/
 registerLocaleData(localeIt,'it');
 //
  
//Aggiungere tra i provider il nuovo valore a LOCALE_ID
 {provide: LOCALE_ID, useValue: 'it' }
 //
```

### 24/06/2020
##### Aggiunto il modulo per usare il Capacitor Plugin Camera (nel browser) 
    npm install @ionic/pwa-elements
##### Codice aggiunto in src\main.ts    
```javascript 
        import { defineCustomElements } from '@ionic/pwa-elements/loader';
        // Call the element loader after the platform has been bootstrapped
        defineCustomElements(window);
```

### 12/06/2020
##### Aggiunto il modulo per visualizzare qrcode per Angular 8
    npm install angularx-qrcode@~2.1.2 --save

### 05/03/2020
##### Installazione Package Storage (v. 2.2.0 perchè la 2.3 va in errore)
    npm install --save @ionic/storage@2.2.0

### 02/03/2020
##### Installazione modulo moment.js
    npm install moment --save
##### Aggiunte icone sport
    npm install sportsfont
