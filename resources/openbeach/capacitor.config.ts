import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    "appId": "com.gouego",
    "appName": "Open Beach",
    "bundledWebRuntime": false,
    "webDir": "www",
    "backgroundColor": "#ffffffff",
    "android": {
      "path": 'android_ob'
    },
    "ios": {
      "path": "ios_ob",
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

export default config;
