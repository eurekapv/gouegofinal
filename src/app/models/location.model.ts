import { IDDocument } from './iddocument.model';

export class Location extends IDDocument {

    IDAREAOPERATIVA: string;
    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    IMAGEURL: string;
    FAVORITE: boolean;
    CANBOOK: boolean;
    
    
  
    constructor() {
      super();
    }
}