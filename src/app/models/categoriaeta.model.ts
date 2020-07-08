import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';

export class CategoriaEta extends IDDocument {
    CODICE: string;
    ETAMINIMA: number;
    ETAMASSIMA: number;
    DESCTOOLTIP: string;

    constructor() {
        super();
    }

          /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['CODICE',
                    'DESCTOOLTIP'
                    ];
    let arNumber = ['ETAMINIMA','ETAMASSIMA'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'CATEGORIAETA';
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

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }


   
}