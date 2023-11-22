import { IDDocument } from '../../library/models/iddocument.model';
import { Descriptor, TypeDefinition } from '../../library/models/descriptor.model';

export class TipoTesseraTemplate extends IDDocument{

    
    IDTIPOTESSERA: string;
    IDCATEGORIEETA: string;
    DESCRIZIONE: string;
    FILENAMEESTENSIONE: string;
    FILETYPE: string;

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDTIPOTESSERA', 'IDCATEGORIEETA', 'DESCRIZIONE', 'FILENAMEESTENSIONE','FILETYPE'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'TipoTesseraTemplate';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TIPOTESSERATEMPLATE';
        objDescriptor.describeField = 'DESCRIZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                            
        return objDescriptor;
    }      
}
