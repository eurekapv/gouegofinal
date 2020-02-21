import { IDDocument } from './iddocument.model';
import { TipoCampo } from '../models/valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';
import { CampoSport } from './camposport.model';


export class Campo extends IDDocument {
    
  IDAREAOPERATIVA: string;
  IDLOCATION: string;
  IDSPORT: string;
  DENOMINAZIONE: string;
  TIPOLOGIA: TipoCampo;
  DIMENSIONI: string;
  CAMPOSPORT: CampoSport[];



  constructor() {
    super();

  }

      /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDSPORT',
                    'DENOMINAZIONE',
                    'DIMENSIONI'
                    ];
    let arNumber = ['TIPOLOGIA'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['CAMPOSPORT'];

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
      
      switch (fieldName) {

        case 'TIPOLOGIA':
          retType = TypeDefinition.number;
          break;

        default:
          retType = TypeDefinition.char;
          break;

      }

      return retType

    }  
}