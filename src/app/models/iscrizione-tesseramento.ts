import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { IDDocument } from "../library/models/iddocument.model";
import { AzioneTesseramento } from "./valuelist.model";

export class IscrizioneTesseramento extends IDDocument{
    IDISCRIZIONE:       string;
    AZIONE:             AzioneTesseramento;
    IDTIPOTESSERA:      string;
    IDPRIMARY:          string;
    DURATAMESI:         number;
    IDARTICOLO:         string;
    DESCR:              string;
    PREZZO:             number;
    IDCODICEIMPOSTA:    string;
    PREZZONETTO:        number;
    IMPONIBILE:         number;
    ALIQUOTA:           number;
    IMPOSTA:            number;
    GRATUITA:           Boolean;
    SCONTOTEXT:         string;
    SCONTORIGA:         number;
    PREZZOSCONTATO:     number;


    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    } 

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['SCONTOTEXT',
                        'IDCODICEIMPOSTA',
                        'DESCR',
                        'IDARTICOLO',
                        'IDPRIMARY',
                        'IDTIPOTESSERA',
                        'IDISCRIZIONE'
                        ];
        let arNumber = ['DURATAMESI','AZIONE'];
        let arDecimal = ['PREZZOSCONTATO',
                         'SCONTORIGA',
                         'IMPOSTA',
                         'ALIQUOTA',
                         'IMPONIBILE',
                         'PREZZONETTO',
                         'PREZZO'];
        let arBoolean = ['GRATUITO'];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
    
        objDescriptor.className = 'IscrizioneTesseramento';
        objDescriptor.classWebApiName = 'ISCRIZIONETESSERAMWENTO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = '';
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
    
        return objDescriptor;
    }      


    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
        
        //Chiamo IDDOcument
        super.setJSONProperty(data);
        this.setOriginal();

    }      
}
