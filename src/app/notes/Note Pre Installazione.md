Questi comandi si eseguono la PRIMA VOLTA
> npx cap init
Richiede il nome dell'app e scrive il file capacitor.config.json
> ionic build
Eseguire il build cosi si crea la cartella www con i file da installare
> npx cap add android
Questo crea la cartella con il progetto Android
> npx cap add ios
Questo crea la cartella con il progetto Ios

COMPILAZIONI SUCCESSIVE IOS
> ionic build
> npx cap sync
> npx cap copy
Questo copia il www nelle cartelle dispositivo
> npx cap open ios
//Documentazione Capacitor Ios 
https://capacitorjs.com/docs/ios/configuration
Se la compilazione Xcode parla di File debug unable to open dare i permessi alla cartella Pods/TargetSupportFile

COMPILAZIONI SUCCESSIVE ANDROID
> ionic build
> npx cap sync
> npx cap copy
Questo copia il www nelle cartelle dispositivo
> npx cap open android

Se si installano nuovi plugin eseguire dopo l'installazione del plugin
> npm install "qualcosa"
> npx cap update


ESECUZIONE IN LIVE RELOADING
>ionic capacitor run android -l --external
Poi far partire l'emulatore da Android Studio
in caso di errore ERR_CLEARTEXT_NOT_PERMITTED, inserire in AndroidManifest.xml, nel tag <application> la riga android:usesCleartextTraffic="true"





Funzionalità Capacitor
1) CAMERA 
Per l'utilizzo della fotocamera bisogna richiedere i permessi all'utente
vedi link: https://capacitorjs.com/docs/apis/camera

SISTEMI IOS (Sembrano già presenti)
iOS requires the following usage description be added and filled out for your app in Info.plist:

Name:               Privacy - Camera Usage 
Description Key:    NSCameraUsageDescription

Name:               Privacy - Photo Library Additions Usage 
Description Key:    NSPhotoLibraryAddUsageDescription

Name:               Privacy - Photo Library Usage 
Description Key:    NSPhotoLibraryUsageDescription

SISTEMI ANDROID
Aggiungere i permessi al file AndroidManifest.xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
Additionally, because the Camera API launches a separate Activity to handle taking the photo, you should listen for appRestoredResult in the App plugin to handle any camera data that was sent in the case your app was terminated by the operating system while the Activity was running.

