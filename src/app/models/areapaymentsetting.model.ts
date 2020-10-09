import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PaymentChannel,EnvironmentPaypal } from 'src/app/models/payment.model';


export class AreaPaymentSetting extends IDDocument {
    
    IDAREAOPERATIVA: string;
    TIPOPAYMENT: PaymentChannel;
    PPENVIRONMENT: EnvironmentPaypal;
    PPACCOUNT: string;
    PPCLIENTIDSANDBOX: string;
    PPCLIENTIDPRODUCTION: string;
    PPCLIENTSECRET: string;
    SETTORI: string;


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
                      'SETTORI'];
      let arNumber = ['TIPOPAYMENT','PPENVIRONMENT'];
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


}