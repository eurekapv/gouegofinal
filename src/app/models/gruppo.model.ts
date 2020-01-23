import { IDDocument } from './iddocument.model';

export enum TipoSocieta {
    sportiva = 10,
    formazione = 20
  }

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
    
}