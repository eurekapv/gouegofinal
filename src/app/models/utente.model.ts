import { IDDocument } from '../library/models/iddocument.model';
import { Sesso, TargetSesso } from './valuelist.model';
import { UtenteLivello } from './utentelivello.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { MyDateTime } from '../library/models/mydatetime.model';


export class Utente extends IDDocument {
    COGNOME: string;
    NOME: string;
    NOMINATIVO: string;
    EMAIL: string; 
    WEBLOGIN: string;
    WEBPASSWORD:string;
    SHAPASSWORD: string;
    INPUTPASSWORD: string;
    MOBILENUMBER: string;
    TELEFONO1: string;
    TELEFONO2: string;
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
    VERIFICATAMAIL: boolean;
    VERIFICATAMOBILE: boolean;
    RUOLO: number;
    MANSIONE: number;
    UTENTILIVELLI: UtenteLivello[];

    /**
     * 
     * @param onlyInstance Non inizializzare il documento, ma crea solo istanza
     */
    constructor(onlyInstance?:boolean) {
        
        super(onlyInstance);

        if (!onlyInstance) {
            this.UTENTILIVELLI = [];
            this.PROFILAZIONEESTERNA = false;
            this.PROFILAZIONEINTERNA = false;
        }

        this.VERIFICATAMAIL = false;
        this.VERIFICATAMOBILE = false;
    }


    /**
     * Ritorna l'eta del partecipante
     */
    public get eta(): number {
        let num = 0;
        let oggi = new Date();

        if (this.NATOIL) {
            if (this.NATOIL < oggi) {
                num = MyDateTime.durataAnni(this.NATOIL, oggi);
            }
        }
        return num;
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
                    'AVATAR',
                    'SHAPASSWORD',
                    'INPUTPASSWORD',
                    'TELEFONO1',
                    'TELEFONO2'
                    ];
    let arNumber = ['SESSO','RUOLO','MANSIONE'];
    let arBoolean = ['NEWSLETTER','PROFILAZIONEINTERNA','PROFILAZIONEESTERNA','VERIFICATAMAIL','VERIFICATAMOBILE'];
    let arDate = ['NATOIL'];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['UTENTILIVELLI'];

    objDescriptor.className = 'Utente';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'UTENTE';
    objDescriptor.describeField = 'NOMINATIVO';


    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

    
    objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    objDescriptor.setRelation('IDLOCATION','Location');

    
    return objDescriptor;
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


    /**
     * Ritorna una label per indicare se la Mail è verificata oppure no
     */
    getLabelVerificaMail() {
        let labelReturn = '';

        //Mail verificata
        if (this.VERIFICATAMAIL) {

            //Se c'e' la mail dico che è verificata
            if (this.EMAIL && this.EMAIL.length !== 0) {
                labelReturn = 'VERIFICATA';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }
        else {
            //Se c'e' la mail dico che non è verificata
            if (this.EMAIL && this.EMAIL.length !== 0) {
                labelReturn = 'NON VERIFICATA';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }

        return labelReturn;
    }

    /**
     * Ritorna una label per indicare se il telefono è verificato oppure no
     */
    getLabelVerificaMobile() {
        let labelReturn = '';

        //Mobile verificato
        if (this.VERIFICATAMOBILE) {

            //Se c'e' la mail dico che è verificata
            if (this.MOBILENUMBER && this.MOBILENUMBER.length !== 0) {
                labelReturn = 'VERIFICATO';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }
        else {
            //Se c'e' la mail dico che non è verificata
            if (this.MOBILENUMBER && this.MOBILENUMBER.length !== 0) {
                labelReturn = 'NON VERIFICATO';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }

        return labelReturn;
    }


    /**
     * Cerca dentro a Utente Livelli se presente uno sport e un determinato livello
     * @param idLivello Livello richiesto
     * @param idSport Sport richiesto
     */
    isForLevelSport(idLivello:string, idSport: string): boolean {
        let isValid = false;
        let index = -1;

        if (this.UTENTILIVELLI && this.UTENTILIVELLI.length != 0) {
            index = this.UTENTILIVELLI.findIndex (elLivello => {
                return (elLivello.IDLIVELLO == idLivello && elLivello.IDSPORT == idSport)
            });
        }

        if (index != -1) {
            isValid = true;
        }

        return true;
    }


    /**
     * Confronta il target Sesso con il Sesso dell'utente
     * @param target Target di confronto
     */
    isForTargetSesso(target: TargetSesso) {
        let isValid = false;

        if (target && this.SESSO) {
            if ((target == TargetSesso.maschile || target == TargetSesso.maschileFemminile) && this.SESSO == Sesso.maschio) {
                isValid = true;
            }
            else if ((target == TargetSesso.femminile || target == TargetSesso.maschileFemminile) && this.SESSO == Sesso.femmina) {
                isValid = true;
            }
        }

        return isValid;
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