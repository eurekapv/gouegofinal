import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PaymentChannel, PaymentEnvironment, PaymentMode, SettorePagamentiAttivita, ValueList } from './valuelist.model';


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


    /**
     * Imposta al massimo 3 valori di ritorno dal enum PaymentMode
     * pagaStruttura se presente una voce onSite
     * pagaBonifico se presente una voce bonifico
     * pagaAdesso se presente un pagamento elettronico
     * 
     * @param arPaymentSettings Elenco Configurazione pagamenti 
     */
    static prepareArPaymentMode(arPaymentSettings: AreaPaymentSetting[]): ValueList[] {
      let onSite = false;
      let withBonifico = false;
      let electronicPay = false;
      let myElList: ValueList;

      let arReturn: ValueList[] = [];

      if (arPaymentSettings) {

        arPaymentSettings.forEach(element => {
            switch (element.TIPOPAYMENT) {
              case PaymentChannel.onSite:
                if (!onSite) {
                  myElList = new ValueList(PaymentMode.pagaStruttura, 'Paga in struttura');
                  myElList.itemIcon = 'cash-outline';
                  arReturn.push(myElList);
                }
                onSite = true;
              break;

              case PaymentChannel.bonifico:
                if (!withBonifico) {
                  myElList = new ValueList(PaymentMode.pagaStruttura, 'Effettua un bonifico');
                  myElList.itemIcon = 'document-text-outline';
                  arReturn.push(myElList);
                }
                withBonifico = true;
              break;
            
              case PaymentChannel.applePay:
              case PaymentChannel.googlePay:
              case PaymentChannel.paypal:
              case PaymentChannel.stripe:
                if (!electronicPay) {
                  myElList = new ValueList(PaymentMode.pagaAdesso, 'Paga adesso');
                  myElList.itemIcon = 'card-outline';
                  arReturn.push(myElList);
                }
                electronicPay = true;

              break;

              default:
                break;

            }
        });



      }

      return arReturn;
      
    }
}