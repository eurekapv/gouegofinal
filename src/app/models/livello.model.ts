import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';

export class Livello extends IDDocument {
    IDSPORT: string;
    DENOMINAZIONE: string;
    PROGRESSIONE: number;
    ETAMINIMA: number;
    ETAMASSIMA: number;

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }


          /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDSPORT',
                    'DENOMINAZIONE'
                    ];
    let arNumber = ['PROGRESSIONE','ETAMINIMA','ETAMASSIMA'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'Livello';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'LIVELLO';

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
}

   
}