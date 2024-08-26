import { CapacitorConfig } from '@capacitor/cli';

//#region DEMOBEACH

const config: CapacitorConfig = {
  "appId": "com.DEMOBEACH",
  "appName": "DemoBeach",
  "webDir": "www",
  "backgroundColor": "#ffffffff",
  "android": {
    "path": "application_build/demobeach/android"
  },
  "ios": {
    "path": "application_build/demobeach/ios",
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
