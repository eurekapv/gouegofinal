import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";
import { IDDocument } from "src/app/library/models/iddocument.model";
import { TipoReferUtenteMinuto } from "../zsupport/valuelist.model";

export class UtenteMinuti extends IDDocument {
    IDUTENTE: string;
    IDAREAOPERATIVA: string;
    DATAOPERAZIONE: Date;
    DESCRIZIONE: string;
    VALOREMINUTI: number;
    IDREFER: string;
    TIPOREFER: TipoReferUtenteMinuto;

    constructor() {
        super(true);
    }

    /**
     * Inizializzo l'oggetto
     */
    init() {
        super.init();
        this.VALOREMINUTI = 0;
    }


    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE',
                        'IDAREAOPERATIVA',
                        'DESCRIZIONE',
                        'IDREFER'
                        ];
        let arNumber = ['VALOREMINUTI','TIPOREFER'];
        let arBoolean = [];
        let arDate = ['DATAOPERAZIONE'];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];

        objDescriptor.className = 'UtenteMinuti';
        objDescriptor.classWebApiName = 'UTENTEMINUTI';
        objDescriptor.doRemote = true;
        
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