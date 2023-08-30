import { IDDocument } from "../library/models/iddocument.model";
import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { RequestForeign } from "../library/models/requestParams.model";
import { EventoPrivacy, EventoVisibilita, TargetSesso } from "./valuelist.model";

export class Evento extends IDDocument {
    IDAREAOPERATIVA: string;
    IDSPORT: string;
    IDTIPOEVENTO: string;
    SIGLACALENDARIO: string;
    DENOMINAZIONE: string;
    DATAINIZIO: Date;
    DATAFINE: Date;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    PROGRAMMA: string;
    STATOPRIVACY: EventoPrivacy;
    STATOVISIBILITA: EventoVisibilita;
    TARGETSESSO: TargetSesso;
    IDCATEGORIAETA: string;
    MINPARTECIPANTI: number;
    MAXPARTECIPANTI: number;
    PREZZOLORDO: number;
    ISCRIZIONEDAL: Date;
    ISCRIZIONEAL: Date;
    


    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA','IDSPORT','IDTIPOEVENTO','IDCATEGORIAETA','DENOMINAZIONE','PROGRAMMA'];
        let arNumber = ['STATOPRIVACY','STATOVISIBILITA','TARGETSESSO','MINPARTECIPANTI','MAXPARTECIPANTI','PREZZOLORDO'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO','DATAFINE'];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE','ISCRIZIONEDAL','ISCRIZIONEAL'];
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
        objDescriptor.setRelation('IDCATEGORIAETA','CategoriaEta');
        
                            
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
