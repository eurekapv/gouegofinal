import { IDDocument } from './iddocument.model';
import { TipoSocieta } from '../models/valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';


export class Gruppo extends IDDocument {

    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    CODICEFISCALE: string;
    PARTITAIVA: string;
    APPID: string;
    IMAGEBRAND: string;
    TIPOGRUPPO: TipoSocieta;
  
    constructor() {
      super();
    }

        /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DENOMINAZIONE',
                    'INDIRIZZO',
                    'CAP',
                    'COMUNE',
                    'PROVINCIA',
                    'ISOSTATO',
                    'CODICEFISCALE',
                    'PARTITAIVA',
                    'APPID',
                    'IMAGEBRAND'
                    ];
    let arNumber = ['TIPOGRUPPO'];
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
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
     describerType(fieldName): TypeDefinition {
      let retType = TypeDefinition.char;
      if (fieldName == 'TIPOGRUPPO') {
        retType = TypeDefinition.number;
      }

      return retType

    }
}