import { CapacitorConfig } from '@capacitor/cli';

//#region PROGETTO RIEDUCA

const config: CapacitorConfig = {
  "appId": "com.gouego.progettorieduca",
  "appName": "Progetto Rieduca",
  "webDir": "www",
  "backgroundColor": "#ffffffff",
  "android": {
    "path": "application_build/progettorieduca/android"
  },
  "ios": {
    "path": "application_build/progettorieduca/ios",
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
