import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';

export class UnitaMisura extends IDDocument{
    CODICE: string;
    DESCR: string;
    PREDEFINITA: boolean;
    ICONPREF: string;

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['CODICE', 'DESCR', 'PREDEFINITA', 'ICONPREF'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'UnitaMisura';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UNITAMISURA';
        objDescriptor.describeField = 'DESCR';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                            
        return objDescriptor;
    }
}