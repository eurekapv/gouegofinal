
/***********************************/
/*  HELP COME TRADURRE IN ITALIANO  */
/***********************************/  
 > import { NgModule, LOCALE_ID } from '@angular/core';
 1) Importare LOCALE_ID oltre che NgModule in app.module.ts
  
 > import { registerLocaleData } from '@angular/common';
 > import localeIt from '@angular/common/locales/it';
 2) Importare registerLocaleData e la lingua desiderata
 N.B. Notare che non ci sono le graffe in localeIt (è un nome di fantasia)
  
 registerLocaleData(localeIt,'it');
 3) Fuori da NgModule o Class registrare il nome di fantasia
 con la sigla che Angular usa per la lingua (it per italiano, etc)
  
 {provide: LOCALE_ID, useValue: 'it' }
 4) Aggiungere tra i provider il nuovo valore a LOCALE_ID
 

/**
 * AGGIORNATI I MODULI A IONIC 5
 * 
 * Usare i due comandi:
 * 
 > npm update
 * 
 > npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
 * 
 * e poi ho installato lo Storage (usare versione 2.2.0 altrimenti 2.3 va in errore) con
 * 
 > npm install --save @ionic/storage@2.2.0

 */

 /*
 02-03-2020
 Aggiunto il modulo moment.js per la gestione di date e orari
 
 npm install moment --save

 Aggiunte Icone Sport Font
npm install sportsfont
 */

 /*
 12-06-2020
 Aggiunto il modulo per visualizzare qrcode da https://www.npmjs.com/package/angularx-qrcode
 # Angular 8 and Ionic
npm install angularx-qrcode@~2.1.2 --save

oppure 

# Angular 9 and Ionic
npm install angularx-qrcode --save
 */

 /* 24-06-2020
 Per usare il Capacitor Plugin Camera (nel browser) ho installato Ionic PWA Elements Library
 npm install @ionic/pwa-elements

 Nel file src/main.ts ho importato e definito

        import { defineCustomElements } from '@ionic/pwa-elements/loader';
        // Call the element loader after the platform has been bootstrapped
        defineCustomElements(window);


CAPACITOR
ionic integrations enable capacitor

//Verifica e aggiornamento versione capacitor Core e CLI
npm install @capacitor/cli@latest
npm install @capacitor/core@latest

npm install @capacitor/ios@latest
npm install @capacitor/android@latest

        
 */

/***************/
/* 29/06/2020  */
/***************/ 
Aggiunto un modulo che consente di caricare gli script in maniera dinamica
> npm i scriptjs

Viene comodo per caricare il file JS corretto per Paypal versione Web
Per usare il caricamento dinamico:

import { get } from 'scriptjs';

ngOnInit() {

    get("assets/js/searchEmp.js", () => {
        getSerchInspContext = this;
        loadSearchEmp();
    });
}

/* ********************************** */
/* RECUPERO ELENCO COMUNI ITALIANI    */
/* ********************************** */
Esiste un repository github
https://github.com/Samurai016/Comuni-ITA
installabile su server Node.Js oppure siccome è hostato su heroku
https://comuni-ita.herokuapp.com/

è possibile interrogarlo

/* SOCIAL SHARING */
Aggiunto plugin per Social Sharing

> npm install cordova-plugin-x-socialsharing
> npm install @ionic-native/social-sharing
> npm install jetifier
> npx jetifier


aggiunto SocialSharing all'array "providers" nell'app.module.ts

/*HTML TO IMAGE*/
>npm install --save html-to-image

dove serve:
import htmlToImage from 'html-to-image';

/* ****************** */
/*      06/08/2020    */
/*       crypto-js    */
/**********************/ 
Aggiunto il modulo per criptare stringhe
> npm install crypto-js
> npm install @types/crypto-js

Aprire il file angular.json
sotto architect.build.options.scripts
"scripts": [
              "node_modules/crypto-js/crypto-js.js"
            ]


Installazione Paypal
> ionic cordova plugin add com.paypal.cordova.mobilesdk
> npm install @ionic-native/paypal
Aggiungere in capacitor.config.json
"ios": {
  "cordovaLinkerFlags": ["-ObjC"]
}


Installazione "Choser" (per caricamento documenti)
>npm install cordova-plugin-chooser
>npm install @ionic-native/chooser
>ionic cap sync

aggiungere a config.xml
<platform name="android">
 <edit-config
   file="app/src/main/AndroidManifest.xml"
   mode="merge"
   target="/manifest/application">
   <application android:largeHeap="true" />
 </edit-config>
</platform>




