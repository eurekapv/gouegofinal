import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { TipoDocumentazione } from './tipodocumentazione.model';

export class InvioDocumentazione extends IDDocument{
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
                        'DESCRIZIONE'];
        
    
        objDescriptor.className = 'InvioDocumentazione';
        objDescriptor.doRemote = false;
        objDescriptor.describeField = 'DESCRIZIONE'
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
            
        return objDescriptor;
    }
}

export class Documentazione extends IDDocument{
    IDUTENTE : string;
    IDTIPODOCUMENTAZIONE : string;
    CLASSE : TipoDocumentazione;
    DESCRIZIONE : string;
    FILENAMEESTENSIONE : string; //percorso relativo
    VALIDOFINO : Date;
    FILETYPE : string;
    CLIENTUPLOAD : boolean;
    

    constructor(onlyInstance = false){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE',
                        'IDTIPODOCUMENTAZIONE',
                        'DESCRIZIONE',
                        'FILENAMEESTENSIONE',
                        'FILETYPE',
                        'CLIENTUPLOAD'
                        ];
        let arBoolean = ['CLIENTUPLOAD'];
        let arDate = ['VALIDOFINO'];
    
        objDescriptor.className = 'Documentazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'DOCUMENTAZIONE';
        objDescriptor.describeField = 'FILENAMEESTENSIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
    
        
        objDescriptor.setRelation('IDUTENTE','Utente');
        objDescriptor.setRelation('IDTIPODOCUMENTAZIONE','TipoDocumentazione');
    
        
        return objDescriptor;
    }
}