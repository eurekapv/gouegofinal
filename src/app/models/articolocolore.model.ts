import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';

export class ArticoloColore extends IDDocument {
    IDARTICOLO: string;
    DESCRIZIONE: string;
    
       

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDARTICOLO',
            'DESCRIZIONE',
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'ArticoloColore';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLOCOLORE';
        objDescriptor.describeField = 'DESCRIZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
    
        objDescriptor.setRelation('IDARTICOLO','Articolo');
    
        
        return objDescriptor;
    }

}