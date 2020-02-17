import { IDDocument, TypeDefinition } from './iddocument.model';
import { SettoreAttivita } from './valuelist.model';


export class Attivita extends IDDocument {

    DENOMINAZIONE:  string;
    SETTORE:        SettoreAttivita;
    IDREFER:        string; //ID Riferimento
    IDAREA:         string;
    IDLOCATION:     string;
    IDCAMPO:        string;
    DATAORAINIZIO:  Date;
    DATAORAFINE:    Date;
    IDSPORT:        string; //Sport - Attività di riferimento
    DESCRIZIONE:    string;

    constructor() {
        super();
    }
    
    /**
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
    describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
        
        switch (fieldName) {
  
          case 'SETTORE':
            retType = TypeDefinition.number;
            break;
  
          case 'DATAORAINIZIO':
            retType = TypeDefinition.dateTime;
            break;

          case 'DATAORAFINE':
            retType = TypeDefinition.dateTime;
            break;            
  
          default:
            retType = TypeDefinition.char;
            break;
  
        }
  
        return retType
  
      }    
}