import { IDDocument } from "src/app/library/models/iddocument.model";
import { TargetSesso } from "../zsupport/valuelist.model";
import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";

export class CorsoGiornaliero extends IDDocument{
    IDCORSO: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    DATA: Date;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    ORELEZIONE: number;
    DENOMINAZIONE: string;
    IDSPORT: string;
    IDLIVELLOENTRATA: string;
    DENOMINAZIONELIVELLO: string;
    ISCRIZIONEDAL: Date;
    ISCRIZIONEAL: Date;
    TARGETSESSO: TargetSesso;
    MAXPARTECIPANTI: number;

    constructor() {
        super(true);
    }
    
    init() {
        super.init();
    }


    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDCORSO',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDCAMPO',
            'DENOMINAZIONE',
            'IDSPORT',
            'IDLIVELLOENTRATA',
            'DENOMINAZIONELIVELLO'
        ];
        let arNumber = ['ORELEZIONE','MAXPARTECIPANTI','TARGETSESSO'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE','DATA'];
        let arTime = [];
        
    
        objDescriptor.className = 'CorsoGiornaliero';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOGIORNALIERO';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        objDescriptor.setRelation('IDCORSO','Corso');
    
        
        return objDescriptor;
    }
}
