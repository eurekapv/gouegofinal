import { IDDocument } from "../library/models/iddocument.model";
import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { RequestForeign } from "../library/models/requestParams.model";

export class Evento extends IDDocument {
    IDAREAOPERATIVA: string;
    IDSPORT: string;
    IDTIPOEVENTO: string;
    DENOMINAZIONE: string;
    DATAINIZIO: Date;
    DATAFINE: Date;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    PROGRAMMA: string;
    


    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA','IDSPORT','IDTIPOEVENTO','DENOMINAZIONE','PROGRAMMA'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = ['DATAINIZIO','DATAFINE'];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
        let arTime = [];
        
    
        objDescriptor.className = 'Evento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'EVENTO';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDTIPOEVENTO','TipoEvento');
        
                            
        return objDescriptor;
    }


    /**
     * Per richiedere la decodifica dei campi dell'evento
     * utilizzare questo array di ForeignKey
     * @returns 
     */
    static getReqForeignKeys(): RequestForeign[] {
        let arRequest: RequestForeign[] = [];
        let objForeign: RequestForeign;
    
        objForeign = new RequestForeign('IDAREAOPERATIVA');
        arRequest.push(objForeign);
    
        objForeign = new RequestForeign('IDSPORT');
        arRequest.push(objForeign);
    
        objForeign = new RequestForeign('IDTIPOEVENTO');
        arRequest.push(objForeign);
    
        return arRequest;
    }
}
