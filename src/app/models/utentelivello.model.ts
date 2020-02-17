import { IDDocument, TypeDefinition } from './iddocument.model';

export class UtenteLivello extends IDDocument {
    IDSPORT: string;
    IDLIVELLO: string;
    DESCRSPORT: string;
    DESCRLIVELLO: string;


    constructor() {
        super();
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