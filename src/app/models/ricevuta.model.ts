import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { ClasseDocumento, TipoDocumentazione } from './tipodocumentazione.model';


export class Ricevuta extends IDDocument{
    IDUTENTE : string;
    DESCRIZIONE : string;
    FILENAMEESTENSIONE : string; //percorso relativo
    DATAORAEMISSIONE : Date;
    

    constructor(onlyInstance = false){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE',
                        'DESCRIZIONE',
                        'FILENAMEESTENSIONE',
                        ];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = ['DATAEMISSIONE'];
        let arNumber = [];
    
        objDescriptor.className = 'Ricevuta';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'RICEVUTA';
        objDescriptor.describeField = 'DESCRIZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    
        
        objDescriptor.setRelation('IDUTENTE','Utente');
    
        
        return objDescriptor;
    }

}