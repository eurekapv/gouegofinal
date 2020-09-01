import {SettoreAttivita} from './valuelist.model';
import { Area } from './area.model';
import { element } from 'protractor';
import { isNumber } from 'util';


export class Payment  {
    PaymentsMode: PaymentConfiguration[];



    constructor(docArea: Area) {

        this.PaymentsMode = [];

        this.createPaymentsMode(docArea);
    }
    /**
     * Ritorna un array con i pagamenti abilitati per una determina azione
     * Controlla anche la validità delle configurazioni
     * @param action Azione da pagare
     */
    getPaymentFor(action: SettoreAttivita): PaymentConfiguration[] {
        let arPayment: PaymentConfiguration[];

        arPayment = [];
  
        if (this.PaymentsMode) {
          
          this.PaymentsMode.forEach(elPayment => {
            if (elPayment.settori.includes(action)) {
                
                //Pagamento abilitato quando sono presenti le configurazioni opportune
                if (elPayment.enabled) {

                    arPayment.push(elPayment);
                }

            }
          });
        }
  
        return arPayment;        
    }


    /**
     * Aggiunge o modifica se esiste un pagamento
     * @param objPayment Pagamento
     */
    addUpdatePayment(objPayment: PaymentConfiguration) {
        let index = -1;
        if (objPayment) {

            index = this.PaymentsMode.findIndex((element) => {
                return element.channel == objPayment.channel;
            });

            if (index == -1) {
                //non esiste lo aggiungo
                this.PaymentsMode.push(objPayment);
            }
            else {
                this.PaymentsMode[index] = objPayment;
            }

        }
    }

    createPaymentsMode(docArea: Area) {
        if (docArea) {
            if (docArea.AREAPAYMENTSETTINGS && docArea.AREAPAYMENTSETTINGS.length) {

                for (let index = 0; index < docArea.AREAPAYMENTSETTINGS.length; index++) {

                    const element = docArea.AREAPAYMENTSETTINGS[index];

                    //Se c'e' il settore a cui è riferito il pagamento
                    if (element.SETTORI && element.SETTORI.length) {

                        let objPayment = new PaymentConfiguration();
                        objPayment.channel = element.TIPOPAYMENT;
                        objPayment.addSettori(element.SETTORI);
                        
                        switch (element.TIPOPAYMENT) {
                            case PaymentChannel.paypal:
                                let settings = objPayment.configPayPal;
                                    settings.enviroment = element.PPENVIRONMENT;
                                    settings.account = element.PPACCOUNT;
                                    settings.clientSecret = element.PPCLIENTSECRET;
                                    settings.clientIDProduction = element.PPCLIENTIDPRODUCTION;
                                    settings.clientIDSandbox = element.PPCLIENTIDSANDBOX;
                                break;
                        
                            default:
                                break;
                        }
    
                        this.addUpdatePayment(objPayment);

                    }
                    
                }
            }
        }
    }

    /**
     * Creo oggetti di test
     */
    testingMode() {
        //Contanti
        let objContanti = new PaymentConfiguration();
        objContanti.channel = PaymentChannel.onSite;
        objContanti.settori.push(SettoreAttivita.settorePrenotazione);
        objContanti.settori.push(SettoreAttivita.settoreCorso);
        this.addUpdatePayment(objContanti);


        let objPaypal = new PaymentConfiguration();

        objPaypal.channel = PaymentChannel.paypal;
        objPaypal.settori.push(SettoreAttivita.settorePrenotazione);
        objPaypal.settori.push(SettoreAttivita.settoreCorso);

        let settings = objPaypal.configPayPal;
        settings.enviroment = EnvironmentPaypal.sandbox;
        settings.account = 'info-facilitator@cavallinipietro.com';
        settings.clientIDSandbox = 'AaRz5fCbWZDIV1Cc6aAWCiOgZtcvP3ai39078mHUiTk30Clg31gsnS1PxQ4YQOLaQulptnYWTz9ul67T';
        settings.clientIDProduction = '';
        settings.clientSecret = 'ED_2qooZZylgBlnFWHHiUFk3RVFak6fF3UJQQXKH7slH8AX8zZFfVp1jUIUCYw0rMywhpKAzMDHBZIzr';

        this.addUpdatePayment(objPaypal);

    }
}


//Configurazione Metodo Pagamento
export class PaymentConfiguration {
    channel: PaymentChannel;       //Esempio OnSite, Paypal
    configPayPal: ConfigPaypal;    //Eventuale Configurazione Paypal
    configStrip: any;              //Configurazione altri sistemi
    settori: SettoreAttivita[];    //Settore dove utilizzato (Corsi, Prenotazioni)
    
    constructor() {
        this.settori = [];
        this.configPayPal = new ConfigPaypal();
    }


    /**
     * Controlla se le informazioni contenute sono valide per effettuare il pagamento
     */
    get enabled(): boolean {
        let valid = false;

        switch (this.channel) {
            case PaymentChannel.onSite:
                valid = true;
                break;
            
            case PaymentChannel.paypal:
                valid = this._isValidPaypal;
                break;
        
            default:
                break;
        }

        return valid;
    } 
    
    /**
     * Ritorna una Label a seconda del channel
     */
    get label() {
        let etichetta = '';
        switch (this.channel) {
            case PaymentChannel.paypal:
                etichetta = 'Paga con PayPal';
                break;
            case PaymentChannel.onSite:
                etichetta = 'Paga in Struttura';
                break;        
            default:
                break;
        }

        return etichetta;
    }

    /**
     * Ritorna una Icon a seconda del channel
     */
    get icon() {
        let icona = '';
        switch (this.channel) {
            case PaymentChannel.paypal:
                icona = 'logo-paypal';
                break;
            case PaymentChannel.onSite:
                icona = 'cash-outline';
                break;        
            default:
                break;
        }

        return icona;
    }    

    /**
     * Le impostazioni Paypal sono presenti ?
     */
    private get _isValidPaypal(): boolean {
        let valid = false;

        if (this.configPayPal) {
            valid = this.configPayPal.isValid;
        }

        return valid;
    }

    /**
     * 
     * @param stringSettori Stringa con i settori separati da ,
     */
    addSettori(stringSettori:string) {
        let value:number;
        if (stringSettori && stringSettori.length !== 0) {
            let arSettori = stringSettori.split(';');
            arSettori.forEach(element => {

                
                    try {
                        value = parseInt(element);
                        this.settori.push(value);
                    }
                    catch {
                        
                    }
                
            });
        }
    }
  }
  
  /**
   * Configurazione Paypal
   */
  export class ConfigPaypal {
    enviroment: EnvironmentPaypal;
    account: string;
    clientIDSandbox: string;
    clientIDProduction: string;
    clientSecret: string;

    /**
     * Controlla se le impostazioni sono valide
     */
    get isValid(): boolean {
        let valid = true;

        if (!this.enviroment) {
            valid = false;
        }
        else if (!this.clientSecret) {
            valid = false;
        }
        else {
            if (this.enviroment == EnvironmentPaypal.sandbox && !this.clientIDSandbox) {
                valid = false;
            }
            else if (this.enviroment == EnvironmentPaypal.production && !this.clientIDProduction) {
                valid = false;
            }
        }


        return valid;
    }
  }
  
  
  //Canali dove effettuare il pagamento, compreso onSite in contanti
  export enum PaymentChannel {
    onSite = 10,
    paypal = 20
  }
  
  
  export enum EnvironmentPaypal {
    sandbox = 10,
    production = 20
  }
  
  export class PaymentResult {
    paymentRequestInApp: boolean; //Pagamento con l'App richiesto (Se false pagherà dopo)
    paymentExecuted: boolean;   //Indica se il sistema remoto ha autorizzato il pagamento
    result: boolean;     //Indica se il processo del pagamento è completato (o siamo in attesa)

    message: string;
    responseJson: string;

    constructor() {
        this.result = false;
        //Richiesto il pagamento con l'app
        this.paymentRequestInApp = true;
        //Non eseguito
        this.paymentExecuted = false;
    }
  }