import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";
import { IDDocument } from "src/app/library/models/iddocument.model";

export class UtenteTotaleMinuti extends IDDocument {
    IDUTENTE: string;
    IDAREAOPERATIVA: string;
    TOTALEMINUTI: number;

    constructor() {
        super(true);
    }
    
    init() {
        this.TOTALEMINUTI = 0;
    }


    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE',
                        'IDAREAOPERATIVA'
                        ];
        let arNumber = ['TOTALEMINUTI'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];

        objDescriptor.className = 'UtenteTotaleMinuti';
        objDescriptor.classWebApiName = 'UTENTETOTALEMINUTI';
        objDescriptor.doRemote = true;
        
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
     * Imposta le proprietà
     * @param data JSON Ricevere
     */
    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }    
}