import { IDDocument, TypeDefinition } from './iddocument.model';

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
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
     describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
        let arNumber = ['PROGRESSIONE','ETAMINIMA','ETAMASSIMA'];
        let arDate = [];
        let arTime = [];
        let arDateTime = []
        let arBoolean = [];
        
        if (arNumber.includes(fieldName)) {
          retType = TypeDefinition.number
        }
        else if (arDate.includes(fieldName)) {
          retType = TypeDefinition.date
        }
        else if (arTime.includes(fieldName)) {
          retType = TypeDefinition.time
        }
        else if (arDateTime.includes(fieldName)) {
            retType = TypeDefinition.dateTime
        }  
        else if (arBoolean.includes(fieldName)) {
            retType = TypeDefinition.boolean
        }               
        else {
            retType = TypeDefinition.char;
        }
  
        return retType
  
      }     
}