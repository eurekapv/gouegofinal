import { Descriptor, TypeDefinition } from "../../library/models/descriptor.model";
import { IDDocument } from "../../library/models/iddocument.model";

export class CorsoValutazioneLivello extends IDDocument {
    IDCORSOVALUTAZIONE:     string;
    IDCORSO:                string;
    IDUTENTE:               string;
    NOMINATIVO:             string;
    IDSPORT:                string;
    IDLIVELLOENTRATA:       string;
    IDLIVELLOFINALE:        string;
    

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDCORSO',
            'IDCORSOVALUTAZIONE',
            'IDUTENTE',
            'NOMINATIVO',
            'IDSPORT',
            'IDLIVELLOENTRATA',
            'IDLIVELLOFINALE'
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'CorsoValutazioneLivello';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOVALUTAZIONELIVELLO';
        

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDLIVELLOENTRATA', 'Livello');
        objDescriptor.setRelation('IDLIVELLOFINALE', 'Livello');
       
        
        return objDescriptor;
    }

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }    
}