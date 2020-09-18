import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';

export class InvioDocumentazione extends IDDocument{
    TOKENUTENTE: string;
    IDTIPODOCUMENTAZIONE : string;
    FILE : string;
    DESCRIZIONE : string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }
    
          /**
        * Ritorna il descrittore della Struttura Campi
        */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDTIPODOCUMENTAZIONE',
                        'FILE',
                        'DESCRIZIONE',
                        'TOKENUTENTE'];
        
    
        objDescriptor.className = 'InvioDocumentazione';
        objDescriptor.doRemote = false;
        objDescriptor.describeField = 'DESCRIZIONE'
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
            
        return objDescriptor;
    }
}