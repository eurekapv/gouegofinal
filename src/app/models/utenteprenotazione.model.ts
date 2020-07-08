import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';


export class UtentePrenotazione extends IDDocument {
    IDPRENOTAZIONE: string;
    IDAREAOPERATIVA: string;
    IDUTENTE: string;

    IDLOCATION: string;
    INDIRIZZOLOCATION: string;
    COMUNELOCATION: string;

    IDSPORT: string;
    DENOMINAZIONESPORT: string;

    IDCAMPO: string;
    DENOMINAZIONECAMPO: string;

    DATAORAINIZIO: Date;
    DATAORAFINE: Date;

    
    DURATAORE: number; 
    NUMPARTECIPANTI: number;
    
    

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
                        'IDUTENTE',
                        'IDLOCATION',
                        'INDIRIZZOLOCATION',
                        'COMUNELOCATION',
                        'IDSPORT',
                        'DENOMINAZIONESPORT',
                        'IDCAMPO',
                        'DENOMINAZIONECAMPO'
                        ];
        let arNumber = ['NUMPARTECIPANTI'];
        let arNumberDecimal = ['DURATAORE'];
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

