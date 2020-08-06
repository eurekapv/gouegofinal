import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';

//Documento inviato in POST nella fase di richiesta Codici
export class AccountRegistrationRequestCode extends IDDocument {
    
    IDAREA: string;
    IDREFER: string;
    REQUESTEMAILCODE: boolean;
    EMAIL: string;
    REQUESTSMSCODE: boolean;
    TELEPHONE: string;

    constructor() {

        super();
        this.REQUESTEMAILCODE = false;
        this.REQUESTSMSCODE = false;
    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREA',
                        'IDREFER',
                        'EMAIL',
                        'TELEPHONE'
                        ];
        let arNumber = [];
        let arBoolean = ['REQUESTEMAILCODE', 'REQUESTSMSCODE'];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'AccountRegistrationRequestCode';
        objDescriptor.doRemote = false;
        objDescriptor.classWebApiName = '';
        objDescriptor.describeField  = '';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
    
}

//Documento inviato in POST nella fase di Verifica codici
export class AccountRegistrationVerifyCode extends IDDocument {
    IDAREA: string;
    IDREFER: string;
    EMAILPINCODE: string;
    SMSPINCODE: string;

    constructor() {
        super();
        this.EMAILPINCODE = '';
        this.SMSPINCODE = '';
    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREA',
                        'IDREFER',
                        'EMAILPINCODE',
                        'SMSPINCODE'
                        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'AccountRegistrationVerifyCode';
        objDescriptor.doRemote = false;
        objDescriptor.classWebApiName = '';
        objDescriptor.describeField  = '';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
}

//Risposta ottenuta dal server 
export class AccountRegistrationResponse {
    idRefer: string;
    result: boolean;
    message: string;

}