import { Descriptor, TypeDefinition } from '../../library/models/descriptor.model';
import { IDDocument } from '../../library/models/iddocument.model';

export class ArticoloImages extends IDDocument {
    IDARTICOLO: string;
    COVERIMEAGE: boolean;
    FILENAMEESTENSIONE: string;


    /**
     * 
     * @returns Descrittore del modello
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDARTICOLO',
            'FILENAMEESTENSIONE',
        ];
        let arNumber = [];
        let arBoolean = ['COVERIMAGE'];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
        //Utilizzo la classe Estesa Articolo
        objDescriptor.className = 'ArticoloImages';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLOIMAGES';
        objDescriptor.describeField = 'FILENAMEESTENSIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
           
        
        return objDescriptor;
    }

}
