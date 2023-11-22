import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";
import { IDDocument } from "src/app/library/models/iddocument.model";

export class RiepilogoCarrello extends IDDocument {

    IDSHOPCARRELLO: string;
    IDCODICEIMPOSTA: string;
    ALIQUOTA: number;
    DESCRIMPOSTA: string;
    NATURAESENZIONE: string;
    IMPONIBILE: number;
    IMPOSTA: number;
    ARROTONDAMENTO: number;
    TOTALERIGO: number;
    TOTTEMPORANEO: number;

/**
    * Ritorna il descrittore della Struttura Campi
    */
getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDSHOPCARRELLO',
                    'IDCODICEIMPOSTA',
                    'DESCRIMPOSTA',
                    'NATURAESENZIONE'
                    ];
    let arNumber = ['ALIQUOTA',
                    'IMPONIBILE',
                    'IMPOSTA',
                    'ARROTONDAMENTO',
                    'TOTALERIGO',
                    'TOTTEMPORANEO',
                    ];
    let arBoolean = [];
    let arDate = [''];
    let arDateTime =[];
    let arTime = [];
    

    objDescriptor.className = 'RiepilogoCarrello';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'RIEPILOGOCARRELLO';
    objDescriptor.describeField = 'DESCRIMPOSTA';
    
    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    
    return objDescriptor;
}        
}
