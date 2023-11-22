import { LogApp } from "src/app/models/zsupport/log.model";
import { environment } from "src/environments/environment";

/* Classe per la configurazione dei messaggi pubblicitari 
su AdMob e AdSense */
export class AdvertisingConfig {

    webConfig: IAdvertisingConfig;
    androidConfig: IAdvertisingConfig
    iosConfig: IAdvertisingConfig;


    /**
     * Imposta la configurazione per l'app attiva
     * @param activeIdApp 
     */
    setFor(activeIdApp: string) {

        let objListCustomer = environment.connection.customer;
        let cfgCustomer: IEnvironmentCustomer;
        let androidBannerMargin: number = 61 + 2;  //61 è alta la Tab Bar (lascio 2 in piu);
        let iosBannerMargin: number = 75 + 2; //75 è alta la Tab Bar (lascio 2 in piu);
        
        if (activeIdApp && activeIdApp.length != 0) {
            LogApp.consoleLog('Environment List Customer');
            LogApp.consoleLog(objListCustomer);

            if (objListCustomer.hasOwnProperty(activeIdApp)) {

                cfgCustomer = objListCustomer[activeIdApp];
                LogApp.consoleLog(`activeIdApp: ${activeIdApp} found`);
                LogApp.consoleLog(cfgCustomer);
            }
            else {
                LogApp.consoleLog(`activeIdApp: ${activeIdApp} not found`);
            }

        }

        if (cfgCustomer) {

            //Android Abilitato
            if (cfgCustomer.admob.md.enable) {

                //Configurazione Android
                this.androidConfig = {
                    enable: true,
                    initialized: false,
                    appId: cfgCustomer.admob.md.appId,
                    bannerId: cfgCustomer.admob.md.bannerId,
                    bannerMarginBottom: androidBannerMargin,
                    personalizeAds: environment.advertisingPersonalized
                }
            }
            else {
                //Configurazione Android non abilitata
                this.androidConfig = this.getEmptyIAdvertisingConfig();               
            }


            //IOS Abilitato
            if (cfgCustomer.admob.ios.enable) {

                //Configurazione Ios Abilitata
                this.iosConfig = {
                    enable: true,
                    initialized: false,
                    appId: cfgCustomer.admob.ios.appId,
                    bannerId: cfgCustomer.admob.ios.bannerId,
                    bannerMarginBottom: iosBannerMargin,
                    personalizeAds: environment.advertisingPersonalized
                }
            }
            else {
                //Configurazione Ios Non abilitata
                this.iosConfig = this.getEmptyIAdvertisingConfig();               
            }

        }
        else {

            //Configurazione Android non abilitata
            this.androidConfig = this.getEmptyIAdvertisingConfig();
            
            //Configurazione Ios Non abilitata
            this.iosConfig = this.getEmptyIAdvertisingConfig();
        }

    }

    /**
     * Crea un oggetto vuoto
     * @returns 
     */
    getEmptyIAdvertisingConfig(): IAdvertisingConfig {
        let adv: IAdvertisingConfig = {
            enable: false,
                initialized: false,
                appId: '',
                bannerId: [],
                bannerMarginBottom: 0,
                interstitialId: [],
                personalizeAds: false
        }

        return adv;
    }

}

export interface IAdvertisingConfig {
    enable?: boolean,
    initialized?: boolean,
    appId?: string,
    bannerId?: string[];
    bannerMarginBottom?: number,
    interstitialId?: string[];
    personalizeAds?: boolean;
}

export interface IEnvironmentCustomer {

    name: string,
    appId: string,
    urlId: string,
    admob: {
        ios: {
            enable: boolean,
            appId: string,
            bannerId: string[]
        },
        md: {
            enable: boolean,
            appId: string,
            bannerId: string[]
        }
    }  

}


