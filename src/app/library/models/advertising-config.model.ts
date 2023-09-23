import { environment } from "src/environments/environment";

/* Classe per la configurazione dei messaggi pubblicitari 
su AdMob e AdSense */
export class AdvertisingConfig {

    webConfig: IAdvertisingConfig;
    androidConfig: IAdvertisingConfig
    iosConfig: IAdvertisingConfig;


    setFor(activeIdApp: string) {

        let objListCustomer = environment.connection.customer;
        let cfgCustomer: IEnvironmentCustomer;
        
        if (activeIdApp && activeIdApp.length == 0) {

            if (objListCustomer.hasOwnProperty(activeIdApp)) {
                cfgCustomer = objListCustomer[activeIdApp];
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
                interstitialId: []
        }

        return adv;
    }

}

export interface IAdvertisingConfig {
    enable?: boolean,
    initialized?: boolean,
    appId?: string,
    bannerId?: string[];
    interstitialId?: string[];
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


