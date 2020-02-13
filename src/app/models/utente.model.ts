import { IDDocument } from './iddocument.model';
import { Sesso } from './valuelist.model';
import { UtenteLivello } from './utentelivello.model';

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
    SESSO: Sesso;
    CODICEFISCALE: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    AVATAR: string;
    UTENTILIVELLI: UtenteLivello[];

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        //Sistemo le collection
        this.setCollectionLivelli(data);
    }

    /**
     * Imposta le collection dell'oggetto
     * @param data JSON Received
     */
    setCollection(data: any) {

        //Cancelli i livelli    
        this.UTENTILIVELLI = [];


        if (data.UTENTELIVELLO) {
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