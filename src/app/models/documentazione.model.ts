import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { ClasseDocumento, TipoDocumentazione } from './tipodocumentazione.model';

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

export class Documentazione extends IDDocument{
    IDUTENTE : string;
    IDTIPODOCUMENTAZIONE : string;
    CLASSE : ClasseDocumento;
    DESCRIZIONE : string;
    FILENAMEESTENSIONE : string; //percorso relativo
    VALIDOFINO : Date;
    FILETYPE : string;
    CLIENTUPLOAD : boolean;
    DATAORACARICAMENTO: Date;
    DATAORAMODIFICA: Date;
    

    constructor(onlyInstance = false){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE',
                        'IDTIPODOCUMENTAZIONE',
                        'DESCRIZIONE',
                        'FILENAMEESTENSIONE',
                        'FILETYPE'
                        ];
        let arBoolean = ['CLIENTUPLOAD'];
        let arDate = ['VALIDOFINO'];
        let arDateTime = ['DATAORACARICAMENTO','DATAORAMODIFICA'];
        let arNumber = ['CLASSE'];
    
        objDescriptor.className = 'Documentazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'DOCUMENTAZIONE';
        objDescriptor.describeField = 'FILENAMEESTENSIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    
        
        objDescriptor.setRelation('IDUTENTE','Utente');
        objDescriptor.setRelation('IDTIPODOCUMENTAZIONE','TipoDocumentazione');
    
        
        return objDescriptor;
    }

}