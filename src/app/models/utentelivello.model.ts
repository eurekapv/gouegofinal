import { IDDocument } from './iddocument.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

export class UtenteLivello extends IDDocument {
    IDSPORT: string;
    IDLIVELLO: string;
    DESCRSPORT: string;
    DESCRLIVELLO: string;


    constructor() {
        super();
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

            /**
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
    describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
  
        return retType
  
    }  


}