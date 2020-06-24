import { IDDocument } from './iddocument.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';
import { StatoPrenotazione } from './valuelist.model';

export class PrenotazionePianificazione extends IDDocument {
    IDPRENOTAZIONE: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDSPORT: string;
    _DESCRSPORT: string;
    IDCAMPO: string;
    _DESCRCAMPO: string;
    DATAORAINIZIO: Date;
    ANNO: number;
    DATAORAFINE: Date;
    DURATAORE: number; 
    IMPONIBILE: number;
    IMPOSTA: number;
    INCASSATO: number;
    RESIDUO: number;
    STATO: StatoPrenotazione;
    NUMPARTECIPANTI: number;
    TOTALE: number;
    GUIDSERIE: string;

    constructor() {
        super();
        this.NUMPARTECIPANTI = 1;
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);
    }

    setCollection(data: any) {

    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDPRENOTAZIONE',
                        'IDAREAOPERATIVA',
                        'IDLOCATION',
                        'IDSPORT',
                        'IDCAMPO',
                        'GUIDSERIE'];
        let arNumber = ['ANNO','NUMPARTECIPANTI'];
        let arNumberDecimal = ['DURATAORE',
                               'IMPONIBILE',
                               'INCASSATO',
                               'RESIDUO',
                               'IMPOSTA',
                               'TOTALE',
                               'STATO'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
        let arTime = [];

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
}