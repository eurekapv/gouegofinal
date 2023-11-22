import { Descriptor, TypeDefinition } from "../../library/models/descriptor.model";
import { IDDocument } from "../../library/models/iddocument.model";

export class TipoEvento extends IDDocument {
    DENOMINAZIONE: string;
    

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['DENOMINAZIONE'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'TipoEvento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TIPOEVENTO';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                            
        return objDescriptor;
    } 
}
