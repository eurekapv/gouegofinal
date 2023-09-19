import { IDDocument } from '../library/models/iddocument.model';
import { Mansione, Sesso, TargetSesso } from './valuelist.model';
import { UtenteLivello } from './utentelivello.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { Documentazione } from './documentazione.model';


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
    LISTMANSIONI: string;
    UTENTILIVELLI: UtenteLivello[];
    DOCUMENTAZIONI: Documentazione[];

    /**
     * 
     * @param onlyInstance Non inizializzare il documento, ma crea solo istanza
     */
    constructor(onlyInstance?:boolean) {
        
        super(onlyInstance);

        if (!onlyInstance) {
            this.UTENTILIVELLI = [];
            this.DOCUMENTAZIONI = [];
            this.PROFILAZIONEESTERNA = false;
            this.PROFILAZIONEINTERNA = false;

            this.VERIFICATAMAIL = false;
            this.VERIFICATAMOBILE = false;
 
        }

    }


    /**
     * Ritorna l'eta del partecipante
     * in forma decimale
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
     * Ritorna ETA come numero Intero
     * @returns 
     */
    public getEtaAsInteger(): number {
        let num = 0;
        let oggi = new Date();

        if (this.NATOIL) {
            if (this.NATOIL < oggi) {
                num = MyDateTime.durataAnni(this.NATOIL, oggi);
                num = Math.trunc(num);
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
                    'TELEFONO2',
                    'LISTMANSIONI'
                    ];
    let arNumber = ['SESSO','RUOLO'];
    let arBoolean = ['NEWSLETTER','PROFILAZIONEINTERNA','PROFILAZIONEESTERNA','VERIFICATAMAIL','VERIFICATAMOBILE'];
    let arDate = ['NATOIL'];
    let arDateTime =[];
    let arTime = [];
    

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
    
                
    //Aggiungo le collection
    objDescriptor.addCollection('UTENTILIVELLI','UtenteLivello','IDUTENTE');
    objDescriptor.addCollection('DOCUMENTAZIONI','Documentazione','IDUTENTE');


    
    objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    objDescriptor.setRelation('IDLOCATION','Location');

    
    return objDescriptor;
}



    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.UTENTILIVELLI = [];

        //Sistemo le collection
        this.setCollection(data);
        
        //Imposto che il documento è originale
        this.setOriginal();

    }

    /**
     * Imposta le collection dell'oggetto
     * @param data JSON Received
     */
    setCollection(data: any) {

        if (data.hasOwnProperty('UTENTELIVELLO') && data.UTENTELIVELLO !== undefined) {
            this.setCollectionLivelli(data);
        }

        if (data.hasOwnProperty('DOCUMENTAZIONE') && data.DOCUMENTAZIONE !== undefined) {
            this.setCollectionDocumentazione(data);
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
     * Crea gli oggetti DOCUMENTAZIONE
     * @param data JSON Received
     */
    private setCollectionDocumentazione(data: any) {
        

        data.DOCUMENTAZIONE.forEach(element => {
            let NewDoc = new Documentazione();

            NewDoc.setJSONProperty(element);
            this.DOCUMENTAZIONI.push(NewDoc);
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

        return isValid;
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


    get isTrainer(){
        let isTrainer: boolean =false;
        if(this.LISTMANSIONI && this.LISTMANSIONI.length > 0){

            if (this.LISTMANSIONI.includes(`"${Mansione.trainer.toString()}"`)){
                isTrainer = true;
            }
        }
        return isTrainer;
    }

    get isAssistenteTrainer(){
        let isTrainer: boolean =false;
        if(this.LISTMANSIONI && this.LISTMANSIONI.length > 0){

            if (this.LISTMANSIONI.includes(`"${Mansione.assistenteTrainer.toString()}"`)){
                isTrainer = true;
            }
        }
        return isTrainer;
    }

    get isCustode(): boolean{
        let isCustode: boolean =false;
        if(this.LISTMANSIONI && this.LISTMANSIONI.length > 0){

            if (this.LISTMANSIONI.includes(`"${Mansione.custode.toString()}"`)){
                isCustode = true;
            }
        }
        return isCustode;
    }


}

