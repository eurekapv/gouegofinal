import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { TipoMasterDocumento } from './valuelist.model';


export class MasterDocumento extends IDDocument{
    IDANAGRAFICA : string;
    NOTESSTAMPA : string;
    
    DATADOCUMENTO : Date;
    IDVALUTA: string;
    SERIE: string;
    NUMERODOCUMENTO: number;
    NUMEROSTAMPA: string;
    TIPOLOGIA: TipoMasterDocumento;
    TOTDOCUMENTO: number;
    ANNO: number;

   

    constructor(onlyInstance = false){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDANAGRAFICA',
                        'NOTESSTAMPA',
                        'IDVALUTA',
                        'SERIE',
                        'NUMEROSTAMPA'
                        ];
        let arBoolean = [];
        let arDate = ['DATADOCUMENTO'];
        let arDateTime = [];
        let arNumber = ['NUMERODOCUMENTO', 'TOTDOCUMENTO', 'TIPOLOGIA','ANNO' ];
    
        objDescriptor.className = 'MasterDocumento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'MASTERDOCUMENTO';
        objDescriptor.describeField = 'NOTESSTAMPA';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    
        
    
        
        return objDescriptor;
    }

}