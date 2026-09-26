import { IDDocument } from "src/app/library/models/iddocument.model";
import { PaymentEnvironment, RecordEliminato } from "../zsupport/valuelist.model";
import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";

export class StripeIntent extends IDDocument {
    IDINTENT: string;
    IDACCOUNTCONNECTED: string;
    ENVIRONMENTMODE: PaymentEnvironment;
    STATUSINTENT: string;
    AMOUNTRECEIVED: number;
    ISOCURRENCY: string;
    EVENTID: string;
    GUIDPRIMARYKEY: string;
    GUIDSECONDARYKEY: string;
    DESCRIPTION: string;
    PRODUCTTYPE: string;
    Eliminato: RecordEliminato;
    DataOraCreazione: Date;

    constructor(onlyInstance?:boolean) {
      super(onlyInstance);
    }

    /**
     * Pagamento incassato (stato definitivo di Stripe)
     */
    isSucceeded(): boolean {
      return this.STATUSINTENT == 'succeeded';
    }

    /**
     * L'utente ha completato la sua parte ma Stripe non ha ancora dato l'esito
     * (metodi di pagamento asincroni)
     */
    isProcessing(): boolean {
      return this.STATUSINTENT == 'processing';
    }

    /**
     * Pagamento annullato
     */
    isCanceled(): boolean {
      return this.STATUSINTENT == 'canceled';
    }

    /**
     * Pagamento incassato o in attesa di esito: la scadenza non va pagata di nuovo
     */
    isSucceededOrProcessing(): boolean {
      return this.isSucceeded() || this.isProcessing();
    }


    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
      let objDescriptor = new Descriptor();
      let arString = ['IDINTENT',
                      'IDACCOUNTCONNECTED',
                      'STATUSINTENT',
                      'ISOCURRENCY',
                      'EVENTID',
                      'GUIDPRIMARYKEY',
                      'GUIDSECONDARYKEY',
                      'Eliminato',
                      'DESCRIPTION'
                    ];
      let arNumber = ['AMOUNTRECEIVED', 'ENVIRONMENTMODE','PRODUCTTYPE'];
      let arBoolean = [];
      let arDate = [];
      let arDateTime =['DataOraCreazione'];
      let arTime = [];
      let arCollection = [];

      objDescriptor.className = 'StripeIntent';
      objDescriptor.doRemote = true;
      objDescriptor.classWebApiName = 'STRIPEINTENT';
      objDescriptor.describeField = 'DESCRIPTION';

      objDescriptor.addMultiple(arString, TypeDefinition.char);
      objDescriptor.addMultiple(arNumber, TypeDefinition.number);
      objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
      objDescriptor.addMultiple(arDate, TypeDefinition.date);
      objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
      objDescriptor.addMultiple(arTime, TypeDefinition.time);
      objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

  


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