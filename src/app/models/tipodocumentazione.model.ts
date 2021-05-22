import { IDDocument } from '../library/models/iddocument.model';
import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';


export class TipoDocumentazione extends IDDocument{
    DENOMINAZIONE : string;
    CLASSE : ClasseDocumento;
    ZORDER : number;

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['DENOMINAZIONE', 'ZORDER'];
        let arNumber = ['CLASSE'];

    
        objDescriptor.className = 'TipoDocumentazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TIPODOCUMENTAZIONE';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
   
                
        return objDescriptor;
    }
}

export enum ClasseDocumento {
    certificatoMedico = 10,
    attestato = 20,
    documento = 30,
    certificazioneIsee = 40,
    certificazione = 50,
    curriculum = 60,
    documentazione = 1000

}