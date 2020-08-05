import { IDDocument } from '../library/models/iddocument.model';
import { Mansione } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';



export class Account extends IDDocument {

    IDREF: string;
    COGNOME: string;
    NOME: string;
    NOMINATIVO: string;
    EMAIL: string;
    WEBLOGIN: string;
    SHAPASSWORD: string;
    INPUTPASSWORD: string;
    MOBILENUMBER: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    RUOLO: number;
    MANSIONE: Mansione;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDREF',
                        'COGNOME',
                        'NOME',
                        'NOMINATIVO',
                        'EMAIL',
                        'WEBLOGIN',
                        'SHAPASSWORD',
                        'INPUTPASSWORD',
                        'MOBILENUMBER',
                        'IDAREAOPERATIVA',
                        'IDLOCATION'
                        ];
        let arNumber = ['RUOLO','MANSIONE'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'Account';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ACCOUNT';
        objDescriptor.describeField  = 'NOMINATIVO';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
    
}
