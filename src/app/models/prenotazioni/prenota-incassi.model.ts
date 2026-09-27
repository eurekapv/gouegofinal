import { IDDocument } from "src/app/library/models/iddocument.model";
import { PaymentChannel, TipoRigoIncasso } from "../zsupport/valuelist.model";
import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";

export class PrenotaIncassi extends IDDocument {
    IDPRENOTAZIONE: string;
    TIPORIGO: TipoRigoIncasso;
    DATAOPERAZIONE: Date;
    IMPORTO: number;
    MODALITA: PaymentChannel;
    DATASCADENZA: Date;
    NOTES: string;
    ZORDER: number;
    DICITURADOC: string;
    IDCONTO:                         string;
    IDTRANSACTION:                   string;
    IDORDER:                         string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);         
    } 


    /**
    * Ritorna il descrittore della Struttura Campi
    */
     getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDPRENOTAZIONE',
                        'NOTES',
                        'DICITURADOC',
                        'IDCONTO',
                        'IDTRANSACTION',
                        'IDORDER'
                        ];
        let arNumber = ['ZORDER',
                        'MODALITA',
                        'TIPORIGO'
                       ];
        let arDecimal = ['IMPORTO'
                        ];
        let arBoolean = [];
        let arDate = ['DATAOPERAZIONE','DATASCADENZA'];
        let arDateTime =[];
        let arTime = [];
    
        objDescriptor.className = 'PrenotaIncassi';
        objDescriptor.classWebApiName = 'PRENOTAINCASSI';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DICITURADOC';
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
    
        
    
        return objDescriptor;
    }      

    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
        //Chiamo IDDOcument
        super.setJSONProperty(data);

        this.setOriginal();

    }
    
    /**
     * Torna TRUE se il rigo deve ancora essere incassato
     */
    requestPayment(): boolean {
        let flagRequest: boolean = false;

        if (this.TIPORIGO == TipoRigoIncasso.scadenza && !this.DATAOPERAZIONE) {
            flagRequest = true;
        }

        return flagRequest;
    }    
}