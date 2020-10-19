import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { TipoMasterDocumento } from './valuelist.model';


export class MasterDocumento extends IDDocument{
    IDANAGRAFICA : string;
    NOTESTAMPA : string;
    
    DATADOCUMENTO : Date;
    IDVALUTA: string;
    NUMERODOCUMENTO: number;
    TIPOLOGIA: TipoMasterDocumento;
    TOTDOCUMENTO: number;
    ANNO: number;





    

    constructor(onlyInstance = false){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDANAGRAFICA',
                        'NOTESTAMPA',
                        'IDVALUTA'
                        ];
        let arBoolean = [];
        let arDate = ['DATADOCUMENTO'];
        let arDateTime = [];
        let arNumber = ['NUMERODOCUMENTO', 'TOTDOCUMENTO', 'TIPOLOGIA', ];
    
        objDescriptor.className = 'MasterDocumento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'MASTERDOCUMENTO';
        objDescriptor.describeField = 'NOTESTAMPA';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    
        
    
        
        return objDescriptor;
    }

}