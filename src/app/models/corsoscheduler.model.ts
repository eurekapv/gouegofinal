import { IDDocument, TypeDefinition } from './iddocument.model';

export class CorsoScheduler extends IDDocument {
    IDCORSO: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    DATA: Date;
    VALUEGIORNO: number;
    ORAINIZIO: Date;
    ORELEZIONI: number;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    MULTIPLA: boolean;



    constructor() {
        super();
    }

        /**
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
     describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
        let arNumber = ['VALUEGIORNO','ORELEZIONI'];
        let arDate = ['DATA'];
        let arTime = ['ORAINIZIO'];
        let arDateTime = ['DATAORAINIZIO', 'DATAORAFINE']
        let arBoolean = ['MULTIPLA'];
        
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