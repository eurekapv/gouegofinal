import { IDDocument } from '../../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';
import { ModeIncassoConfig, PaymentChannel, PaymentEnvironment, PaymentMode, SettoreAttivita, SettorePagamentiAttivita, ValueList } from '../zsupport/valuelist.model';


export class AreaPaymentSetting extends IDDocument {
    
    IDAREAOPERATIVA:        string;
    TIPOPAYMENT:            PaymentChannel;
    PPENVIRONMENT:          PaymentEnvironment;
    SETTORI:                string;
    PPACCOUNT:              string;
    PPCLIENTIDSANDBOX:      string;
    PPCLIENTIDPRODUCTION:   string;
    STENVIRONMENT:          PaymentEnvironment;
    STIDACCOUNT:            string;
    STFLAGSTATUS:           boolean;
    STIDACCOUNTTEST:            string;
    STFLAGSTATUSTEST:           boolean;


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
                      'SETTORI',
                      'STIDACCOUNT',
                      'STIDACCOUNTTEST'
                    ];
      let arNumber = ['TIPOPAYMENT','PPENVIRONMENT','STENVIRONMENT'];
      let arBoolean = ['STFLAGSTATUS','STFLAGSTATUSTEST'];
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
     * 
     * @param listConfiguration ELenco delle configurazioni disponibili
     * @param modeIncasso Come devo incassare ?
     * @param settore Per quale settore
     * @returns 
     */
    static findConfigIncassoFor(
                                  listConfiguration: AreaPaymentSetting[], 
                                  modeIncasso: ModeIncassoConfig,
                                  settorePagamento: SettorePagamentiAttivita) {

      let areaPaymentFounded: AreaPaymentSetting = null;

      if (listConfiguration) {

        for (let index = 0; index < listConfiguration.length; index++) {
          //Recupero la configurazione
          const element = listConfiguration[index];

          //E' relativo al Settore richiesto (Corso, Evento, Prenotazione, Shop)
          if (element.SETTORI && element.SETTORI.includes(settorePagamento.toString())) {
            if (modeIncasso == ModeIncassoConfig.incassoContanti) {
              if (element.TIPOPAYMENT == PaymentChannel.onSite) {
                  areaPaymentFounded = element;
                  break;
              }
            }
            else if (modeIncasso == ModeIncassoConfig.incassoBonifico) {
              if (element.TIPOPAYMENT == PaymentChannel.bonifico) {
                  areaPaymentFounded = element;
                  break;
              }
            }
            else if (modeIncasso == ModeIncassoConfig.incassoCreditCard) {
              //Modalità Paypal
              if (element.TIPOPAYMENT == PaymentChannel.paypal) {
                if (element.PPCLIENTIDPRODUCTION && element.PPCLIENTIDPRODUCTION.length != 0) {
                    areaPaymentFounded = element;
                    break;
                }
                else if (element.PPCLIENTIDSANDBOX && element.PPCLIENTIDSANDBOX.length != 0) {
                    areaPaymentFounded = element;
                    break;
                }
              }  
              else if (element.TIPOPAYMENT == PaymentChannel.stripe 
                        && element.STENVIRONMENT == PaymentEnvironment.production
                        && element.STFLAGSTATUS == true) {
                    areaPaymentFounded = element;
                    break;
              }
              else if (element.TIPOPAYMENT == PaymentChannel.stripe 
                        && element.STENVIRONMENT == PaymentEnvironment.test
                        && element.STFLAGSTATUSTEST == true) {
                    areaPaymentFounded = element;
                    break;
              }
            }
          }
        }
      }

      return areaPaymentFounded;
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

          case PaymentChannel.stripe:
              inApp = true;
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
                  myElList = new ValueList(PaymentMode.pagaBonifico, 'Effettua un bonifico');
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