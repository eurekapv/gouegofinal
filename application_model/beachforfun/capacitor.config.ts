import { CapacitorConfig } from '@capacitor/cli';

//#region OPENBEACH
//Attenzione che appId è diverso per Android -> com.gouego e IOS -> com.gouego.openbeach
//Credo sia utile solo la prima volta

const config: CapacitorConfig = {
  "appId": "com.b4fnovara",
  "appName": "Beach For Fun",
  "webDir": "www",
  "backgroundColor": "#ffffffff",
  "android": {
    "path": "application_build/beachforfun/android"
  },
  "ios": {
    "path": "application_build/beachforfun/ios",
    "cordovaLinkerFlags": [
      "-ObjC"
    ]
  },
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0,
      "launchAutoHide": true,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": false,
      "splashFullScreen": true,
      "SplashMaintainAspectRatio": "true",
      "splashImmersive": true
    }
  },
  "server": {
    "allowNavigation": [
      "gouego.com"
    ]
  },
  "cordova": {
    "preferences": {
      "ScrollEnabled": "false",
      "android-minSdkVersion": "19",
      "BackupWebStorage": "none",
      "SplashMaintainAspectRatio": "true",
      "FadeSplashScreenDuration": "300",
      "SplashShowOnlyFirstTime": "false",
      "SplashScreen": "screen",
      "SplashScreenDelay": "0",
      "androidScaleType": "CENTER_CROP"
    }
  }

};

//#endregion

export default config;
