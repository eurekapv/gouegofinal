import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PaymentChannel, PaymentEnvironment, SettorePagamentiAttivita } from './valuelist.model';


export class AreaPaymentSetting extends IDDocument {
    
    IDAREAOPERATIVA: string;
    TIPOPAYMENT: PaymentChannel;
    PPENVIRONMENT: PaymentEnvironment;
    PPACCOUNT: string;
    PPCLIENTIDSANDBOX: string;
    PPCLIENTIDPRODUCTION: string;
    SETTORI: string;
    STPUBLICKEY: string;
    STPUBLICKEYTEST: string;
    STENVIRONMENT: PaymentEnvironment;


    constructor(onlyInstance?:boolean) {
      super(onlyInstance);
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
      let objDescriptor = new Descriptor();
      let arString = ['IDAREAOPERATIVA',
                      'PPACCOUNT',
                      'PPCLIENTIDSANDBOX',
                      'PPCLIENTIDPRODUCTION',
                      'PPCLIENTSECRET',
                      'SETTORI',
                      'STPUBLICKEY',
                      'STPUBLICKEYTEST'
                    ];
      let arNumber = ['TIPOPAYMENT','PPENVIRONMENT','STENVIRONMENT'];
      let arBoolean = [];
      let arDate = [];
      let arDateTime =[];
      let arTime = [];
      let arCollection = [];

      objDescriptor.className = 'AreaPaymentSetting';
      objDescriptor.doRemote = true;
      objDescriptor.classWebApiName = 'AREAPAYMENTSETTING';
      objDescriptor.describeField = 'TIPOPAYMENT';

      objDescriptor.addMultiple(arString, TypeDefinition.char);
      objDescriptor.addMultiple(arNumber, TypeDefinition.number);
      objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
      objDescriptor.addMultiple(arDate, TypeDefinition.date);
      objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
      objDescriptor.addMultiple(arTime, TypeDefinition.time);
      objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

      objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    


      return objDescriptor;
  }




    /**
     * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
      super.setJSONProperty(data);

      this.setOriginal();
    }


    /**
     * Dato un Settore di pagamento, ritorna TRUE se il Setting lo contempla
     * @param settore Settore di pagamento
     */
    isFor(settore:SettorePagamentiAttivita):boolean {
      let arSettori = [];
      let mySettore = settore + '';
      let incluso = false;
      if (this.SETTORI && this.SETTORI.length != 0) {
        arSettori = this.SETTORI.split(';');
        if (arSettori.includes(mySettore)) {
          incluso = true;
        }
      }

      return incluso;
    }


   /**
   * Ritorna una Icon a seconda del channel
   */
   get icon() {
      let icona = '';
      switch (this.TIPOPAYMENT) {

        case PaymentChannel.applePay:
          icona = 'logo-apple';
          break;

        case PaymentChannel.bonifico:
          icona = 'document-text-outline';
          break;

        case PaymentChannel.googlePay:
          icona = 'logo-google';
          break;

        case PaymentChannel.stripe:
          icona = 'card-outline';
          break;
            
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
   * Ritorna una Label da mostrare in interfaccia
   */
    get label() {
      let etichetta = '';

      switch (this.TIPOPAYMENT) {

        case PaymentChannel.applePay:
          etichetta = 'Apple Pay';
          break;

        case PaymentChannel.bonifico:
          etichetta = 'Bonifico';
          break;

        case PaymentChannel.googlePay:
          etichetta = 'GPay';
          break;

        case PaymentChannel.stripe:
          etichetta = 'Carta di credito';
          break;
            
        case PaymentChannel.paypal:
            etichetta = 'Paypal';
            break;
        
        case PaymentChannel.onSite:
            etichetta = 'Paga in struttura';
            break;   
          
          default:
              break;
      }

      return etichetta;
    }    

    //E' possibile pagare con funzionalità dentro all'App
    get paymentInApp():boolean {
      let inApp: boolean = false;

      switch (this.TIPOPAYMENT) {

          case PaymentChannel.onSite:
              inApp = false;
              break;

          case PaymentChannel.paypal:
              inApp = true;
              break;

          case PaymentChannel.bonifico:
              inApp = false;
              break;

          case PaymentChannel.applePay:
              inApp = false;
              break;

          case PaymentChannel.googlePay:
              inApp = false;
              break;

          case PaymentChannel.stripe:
              inApp = false;
            break;

          default:
              break;
      }

      return inApp;
    }    
}