import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { IDDocument } from "../library/models/iddocument.model";
import { PaymentChannel, TipoRigoIncasso } from "./valuelist.model";

export class IscrizioneIncasso extends IDDocument {
    IDISCRIZIONECORSO:               string;
    DATASCADENZA:                    Date;
    MODALITA:                        PaymentChannel;
    DATAOPERAZIONE:                  Date;
    IMPORTO:                         number;
    NOTES:                           string;
    TIPORIGO:                        TipoRigoIncasso;
    ZORDER:                          number;
    DICITURADOC:                     string;
    IDCONTO:                         string;
    IDTRANSACTION:                   string;
    IDORDER:                         string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);         
    } 


    /**
    * Ritorna il descrittore della Struttura Campi
    */
     getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDISCRIZIONECORSO',
                        'NOTES',
                        'DICITURADOC',
                        'IDCONTO',
                        'IDTRANSACTION',
                        'IDORDER'
                        ];
        let arNumber = ['ZORDER',
                        'MODALITA',
                        'TIPORIGO',
                        'TIPOPREZZO'
                       ];
        let arDecimal = ['IMPORTO'
                        ];
        let arBoolean = [];
        let arDate = ['DATAOPERAZIONE'];
        let arDateTime =[];
        let arTime = [];
    
        objDescriptor.className = 'IscrizioneIncasso';
        objDescriptor.classWebApiName = 'ISCRIZIONEINCASSO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DENOMINAZIONE';
        
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