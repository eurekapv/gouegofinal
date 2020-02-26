import { IDDocument } from './iddocument.model';
import { Sesso } from './valuelist.model';
import { UtenteLivello } from './utentelivello.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';


export class Utente extends IDDocument {
    COGNOME: string;
    NOME: string;
    NOMINATIVO: string;
    EMAIL: string; 
    WEBLOGIN: string;
    MOBILENUMBER: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    NATOIL: Date;
    NATOA: string;
    NATOCAP: string;
    NATOPROV: string;
    NATOISOSTATO: string;
    SESSO: Sesso;
    CODICEFISCALE: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    AVATAR: string;
    NEWSLETTER: boolean;
    PROFILAZIONEINTERNA: boolean;
    PROFILAZIONEESTERNA: boolean;
    UTENTILIVELLI: UtenteLivello[];

    /**
     * 
     * @param noInit Non inizializzare il documento, ma crea solo istanza
     */
    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        if (!onlyInstance) {
            this.UTENTILIVELLI = [];
            this.PROFILAZIONEESTERNA = false;
            this.PROFILAZIONEINTERNA = false;
        }
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['COGNOME',
                    'NOME',
                    'NOMINATIVO',
                    'EMAIL',
                    'WEBLOGIN',
                    'MOBILENUMBER',
                    'INDIRIZZO',
                    'CAP',
                    'COMUNE',
                    'PROVINCIA',
                    'ISOSTATO',
                    'NATOA',
                    'NATOCAP',
                    'NATOPROV',
                    'NATOISOSTATO',
                    'CODICEFISCALE',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'AVATAR'
                    ];
    let arNumber = ['SESSO'];
    let arBoolean = ['NEWSLETTER','PROFILAZIONEINTERNA','PROFILAZIONEESTERNA'];
    let arDate = ['NATOIL'];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['UTENTILIVELLI'];

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
}

        /**
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
     describerType(fieldName): TypeDefinition {
        let retType = TypeDefinition.char;
        let arNumber = ['SESSO'];
        let arDate = ['NATOIL'];
        let arTime = [];
        let arDateTime = []
        let arBoolean = ['do_updated','do_loaded','do_inserted','do_deleted','NEWSLETTER', 'PROFILAZIONEINTERNA','PROFILAZIONEESTERNA' ];
        
        if (arNumber.includes(fieldName)) {
          retType = TypeDefinition.number
        }
        else if (arDate.includes(fieldName)) {
          retType = TypeDefinition.date
        }
        else if (arTime.includes(fieldName)) {
          retType = TypeDefinition.time
        }
        else if (arDateTime.includes(fieldName)) {
            retType = TypeDefinition.dateTime
        }  
        else if (arBoolean.includes(fieldName)) {
            retType = TypeDefinition.boolean
        }               
        else {
            retType = TypeDefinition.char;
        }
  
        return retType
  
      }  

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.UTENTILIVELLI = [];

        //Sistemo le collection
        this.setCollection(data);
    }

    /**
     * Imposta le collection dell'oggetto
     * @param data JSON Received
     */
    setCollection(data: any) {

        if (data.hasOwnProperty('UTENTELIVELLO') && data.UTENTELIVELLO !== undefined) {
            this.setCollectionLivelli(data);
        }
    }


    /**
     * Crea gli oggetti UTENTILIVELLI
     * @param data JSON Received
     */
    private setCollectionLivelli(data: any) {
        

        data.UTENTELIVELLO.forEach(element => {
            let newLevel = new UtenteLivello();

            newLevel.setJSONProperty(element);
            this.UTENTILIVELLI.push(newLevel);
        });
    }


}

export class storageUtente {
    loginUser: string;
    pwdUser: string;
    cripted: boolean;

    constructor(user: string, pwd: string) {
        this.loginUser = user;
        this.pwdUser = pwd;
        this.cripted = false;
    }

    /**
     * Salvo in Stringa JSON l'oggetto
     */
    saveJSON(crypt?: boolean): string {
        let strReturn = '';
        let myObj = new storageUtente(this.loginUser, this.pwdUser);

        if (crypt) {
            //Qui devo criptare utente e password
            myObj.cripted = true;

        }

        strReturn = JSON.stringify(myObj);

        return strReturn;
    }

    loadJSON(stringaJSON: string) {
        let myObj = new storageUtente('','');
        myObj = JSON.parse(stringaJSON);

        if (myObj) {
            if (myObj.cripted) {
                //Devo decriptare username e password
            }

            this.loginUser = myObj.loginUser;
            this.pwdUser = myObj.pwdUser;
            this.cripted = myObj.cripted;
        }
    }
}