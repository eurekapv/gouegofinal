import { Descriptor, TypeDefinition } from "../../library/models/descriptor.model";
import { IDDocument } from "../../library/models/iddocument.model";

export class TipoPagamentoScadenza extends IDDocument {
    IDTIPOPAGAMENTO:    string;
    GIORNI:             number;
    PERCENTUALE:        number;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }    

     /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDTIPOPAGAMENTO'
                    ];
    let arNumber = ['GIORNI', 'PERCENTUALE'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'TipoPagamentoScadenza';
    objDescriptor.classWebApiName = 'TIPOPAGAMENTOSCADENZA';
    objDescriptor.doRemote = true;
    objDescriptor.describeField = 'GIORNI';

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

    objDescriptor.setRelation('IDTIPOPAGAMENTO','TipoPagamento', 'ID');

    
    return objDescriptor;
    }
}
