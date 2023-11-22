import { IDDocument } from "src/app/library/models/iddocument.model";
import { StatoRigoDetailCarrello, TipoRigoDetailCarrello } from "../valuelist.model";
import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";

export class DetailCarrello extends IDDocument {

    IDSHOPCARRELLO: string;
    TIPORIGO: TipoRigoDetailCarrello;
    STATORIGO: StatoRigoDetailCarrello;
    IDARTICOLO: string;
    DESCR: string;
    QUANTITA: number;
    PREZZO: number;
    SCONTOTEXT: string;
    SCONTORIGA: number;
    PREZZOSCONTATO: number;
    PREZZONETTO: number;
    IMPONIBILE: number;
    IDCODICEIMPOSTA: string;
    ALIQUOTA: number;
    IDUNITAMISURA: string;
    ZORDER: number;

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDSHOPCARRELLO',
                        'IDARTICOLO',
                        'DESCR',
                        'SCONTOTEXT',
                        'IDCODICEIMPOSTA',
                        'IDUNITAMISURA'
                        ];
        let arNumber = ['TIPORIGO',
                        'STATORIGO',
                        'QUANTITA',
                        'PREZZO',
                        'SCONTORIGA',
                        'PREZZOSCONTATO',
                        'PREZZONETTO',
                        'IMPONIBILE',
                        'ALIQUOTA',
                        'ZORDER'];
        let arBoolean = [];
        let arDate = [''];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'DetailCarrello';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'DETAILCARRELLO';
        objDescriptor.describeField = 'DESCRIZIONE';
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }        
}
