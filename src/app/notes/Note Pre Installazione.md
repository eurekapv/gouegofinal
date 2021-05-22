# Preparare progetto Android
>Controllare nella cartella resources i file icon.png e splash.png
    npm install cordova-res
Se le immagine sono modificate, rieseguire

Cancellare dalle cartelle android o ios i file e rieseguire 
    cordova-res ios --copy --skip-config 
    cordova-res android --copy --skip-config 

#### Eseguire il build dell'app
    ionic build --prod
#### Risincronizzazione dei progetti
    npx cap sync
    npx cap copy
#### Apertura progetti Android / Xcode
    npx cap open android
    npx cap open ios

>Se la compilazione Xcode indica 'File debug unable to open' dare i permessi alla cartella Pods/TargetSupportFile

#### Se si installano nuovi plugin eseguire dopo l'installazione del plugin
    npm install "qualcosa"
    npx cap update


# Aggiunta Iniziale di Capacitor
#### Aggiungere cordova-res  per la gestione delle icone
    npm install cordova-res
>CordovaRes aggiunge una cartella resources dove sarà necessario aggiungere il file icon.png e splash.png. 


#### Richiede il nome dell'app e scrive il file capacitor.config.json
    npx cap init
#### Eseguire il build dell'app
    ionic build --prod
#### Aggiunta dei 2 progetti
    npx cap add android
    npx cap add ios












