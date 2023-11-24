import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";
import { IDDocument } from "src/app/library/models/iddocument.model";

export class ArticoloScorta extends IDDocument {
    IDARTICOLO: string;
    IDARTICOLOCOLORE: string;
    DESCRCOLORE: string;
    IDARTICOLOTAGLIA: string;
    DESCRTAGLIA: string;
    QUANTITA: number;


    /**
     * 
     * @returns Descrittore del modello
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDARTICOLO',
            'IDARTICOLOCOLORE',
            'DESCRCOLORE',
            'IDARTICOLOTAGLIA',
            'DESCRTAGLIA',
        ];
        let arNumber = ['QUANTITA'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
        
        objDescriptor.className = 'ArticoloScorta';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLOSCORTA';
        objDescriptor.describeField = 'QUANTITA';


        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
       
    
    return objDescriptor;
}    
}
