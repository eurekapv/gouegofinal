import { IDDocument } from './iddocument.model';


export enum SettoreAttivita {
    settoreCorso = 10,
    settorePrenotazione = 20,
    settoreTorneo = 30
}

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
}