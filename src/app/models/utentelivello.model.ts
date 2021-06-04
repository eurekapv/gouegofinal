import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';

export class UtenteLivello extends IDDocument {
    IDSPORT: string;
    IDLIVELLO: string;
    DESCRSPORT: string;
    DESCRLIVELLO: string;


    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDSPORT',
                        'IDLIVELLO',
                        'DESCRSPORT',
                        'DESCRLIVELLO'
                        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];

        objDescriptor.className = 'UtenteLivello';
        objDescriptor.classWebApiName = 'UTENTELIVELLO';
        objDescriptor.doRemote = true;
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
        
        
        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('IDLIVELLO','Livello');

        

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