import { IDDocument } from '../library/models/iddocument.model';
import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';


export class TipoDocumentazione extends IDDocument{
    DENOMINAZIONE : string;
    CLASSE : ClasseDocumento;
    ZORDER : number;

    constructor(){
        super();
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['DENOMINAZIONE', 'ZORDER'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];
    
        objDescriptor.className = 'TipoDocumentazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TIPODOCUMENTAZIONE';
        objDescriptor.describeField = 'CLASSE';
    
    
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

export enum ClasseDocumento {
    certificatoMedico = 10,
    attestato = 20,
    documento = 30,
    certificazioneIsee = 40,
    documentazione = 1000

}