import { IDDocument } from '../library/models/iddocument.model';
import { SettoreAttivita, StatoCorso } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';

export class Impegni extends IDDocument {

    IDREFER:        string; //ID Riferimento
    SETTORE:        SettoreAttivita;
    DENOMINAZIONE:  string;
    IDAREAOPERATIVA:string;
    IDLOCATION:     string;
    IDCAMPO:        string;
    IDSPORT:        string; //Sport - Attività di riferimento
    DATAORAINIZIO:  Date;
    DATAORAFINE:    Date;
    IDUTENTE:       string;
    STATO:          StatoCorso;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

      /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDREFER',
                    'DENOMINAZIONE',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'IDSPORT',
                    'IDUTENTE'];
    let arNumber = ['SETTORE'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'Impegni';
    objDescriptor.classWebApiName = 'IMPEGNI';
    objDescriptor.doRemote = true;
    objDescriptor.describeField = 'DENOMINAZIONE';

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

    objDescriptor.setRelation('IDAREA','Area');
    objDescriptor.setRelation('IDLOCATION','Location');
    objDescriptor.setRelation('IDCAMPO','Campo');
    objDescriptor.setRelation('IDSPORT','Sport');
    objDescriptor.setRelation('IDUTENTE','Utente');
    
    return objDescriptor;
}
       
}