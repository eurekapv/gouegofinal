import { IDDocument, TypeDefinition } from './iddocument.model';

export class CategoriaEta extends IDDocument {
    CODICE: string;
    ETAMINIMA: number;
    ETAMASSIMA: number;
    DESCTOOLTIP: string;

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }


    /**
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
     describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
        
        switch (fieldName) {
  
          case 'ETAMINIMA':
            retType = TypeDefinition.number;
            break;
  
          case 'ETAMASSIMA':
            retType = TypeDefinition.number;
            break;
  
          default:
            retType = TypeDefinition.char;
            break;
  
        }
  
        return retType
  
      }    
}