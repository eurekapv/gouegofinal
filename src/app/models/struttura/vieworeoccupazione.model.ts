import { IDDocument } from '../../library/models/iddocument.model';
import { StatoSlot, SettoreAttivita } from '../zsupport/valuelist.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';

export class ViewOreOccupazione extends IDDocument {
    DATA: Date;
    ORE: number;
    MINUTI: number;
    DATAORAINIZIOSLOT: Date;
    DATAORAFINESLOT: Date;
    STATO: StatoSlot;
    TIPOOCCUPAZIONE: SettoreAttivita;
    DESCRIZIONE: string;
    TOOLTIP: string;
    IDPRIMARY: string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }


    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DESCRIZIONE','TOOLTIP','IDPRIMARY'];
    let arNumber = ['ORE','MINUTI','STATO','TIPOOCCUPAZIONE'];
    let arBoolean = [];
    let arDate = ['DATA'];
    let arDateTime =['DATAORAINIZIOSLOT','DATAORAFINESLOT'];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'ViewOreOccupazione';
    objDescriptor.doRemote = false;
    objDescriptor.classWebApiName = '';


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