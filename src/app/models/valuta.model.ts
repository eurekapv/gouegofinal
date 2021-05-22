import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';

export class Valuta extends IDDocument{
    DESCR: string;
    SIMBOLO: string;
    NUMDECIMALI: number;
    DATAOBSOLESCENZA: Date;
    CODICEISO: string;
    PREDEFINITA: boolean;
    ICONPREF: string;

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'DESCR',
            'SIMBOLO',
            'CODICEISO',
            'ICONPREF'            
        ];
        let arNumber = ['NUMDECIMALI'];
        let arBoolean = ['PREDEFINITA'];
        let arDate = ['DATAOBSOLESCENZA'];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'Valuta';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'VALUTA';
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