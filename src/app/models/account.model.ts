import { IDDocument } from './iddocument.model';
import { Mansione, Ruolo } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';



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

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }

        /**
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
    describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
        if (fieldName == 'RUOLO' || fieldName == 'MANSIONE') {
          retType = TypeDefinition.number;
        }
  
        return retType
  
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

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
    
}