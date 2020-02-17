import { IDDocument, TypeDefinition } from './iddocument.model';
import { TipoSocieta } from '../models/valuelist.model';

// export enum TipoSocieta {
//     sportiva = 10,
//     formazione = 20
//   }

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