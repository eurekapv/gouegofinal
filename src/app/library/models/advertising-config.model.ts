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
                    appId: cfgCustomer.admob.md.appId,
                    bannerId: cfgCustomer.admob.md.bannerId,
                }
            }
            else {
                //Configurazione Android
                this.androidConfig = {
                    appId: '',
                    bannerId: [],
                }                
            }


            //IOS Abilitato
            if (cfgCustomer.admob.ios.enable) {

                //Configurazione Ios Abilitata
                this.iosConfig = {
                    appId: cfgCustomer.admob.ios.appId,
                    bannerId: cfgCustomer.admob.ios.bannerId,
                }
            }
            else {
                //Configurazione Ios Non abilitata
                this.iosConfig = {
                    appId: '',
                    bannerId: [],
                }                
            }

        }
        else {

            //Configurazione Android non abilitata
            this.androidConfig = {
                appId: '',
                bannerId: [],
            }   
            
            //Configurazione Ios Non abilitata
            this.iosConfig = {
                appId: '',
                bannerId: [],
            }             
        }

    }

}

export interface IAdvertisingConfig {
    appId?: string,
    bannerId?: string[];
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


