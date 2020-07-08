import { IDDocument } from './iddocument.model';
import { SettoreAttivita } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

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

      /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DENOMINAZIONE',
                    'IDREFER',
                    'IDAREA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'IDSPORT',
                    'DESCRIZIONE'];
    let arNumber = ['SETTORE'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'ATTIVITA';
    objDescriptor.classWebApiName = '';
    objDescriptor.doRemote = false;

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
}
       
}