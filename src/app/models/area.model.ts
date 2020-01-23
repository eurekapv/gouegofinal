import { IDDocument } from './iddocument.model';

export enum TipoArea {
    areaGruppo = 10,
    areaIndipendente = 20
} 

export class Area extends IDDocument {
    IDGRUPPOSPORTIVO: string;
    TIPO: TipoArea;
    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    LOCATIONS: Location[];
  
    constructor() {
      super();
    }
}