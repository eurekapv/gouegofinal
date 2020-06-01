import { IDDocument } from './iddocument.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';
import { PrenotazionePianificazione } from './prenotazionepianificazione.model';

export class Prenotazione extends IDDocument {
    DATA: Date; 
    IDAREAOPERATIVA: string;
    IDUTENTE: string;
    NOMINATIVO: string;
    MOBILENUMBER: string;
    IDTIPOPAGAMENTO: string;
    IMPORTO: number;
    INCASSATO: number;
    RESIDUO: number;
    IMPOSTA: number;
    TOTALE: number;
    PRENOTAZIONEPIANIFICAZIONE: PrenotazionePianificazione[];

    _READY: boolean; //Parametro indica che tutti i conteggi sono effettuati, 
                     //si puo' procedere al pagamento finale

    constructor() {
        super();
        this.IMPORTO = 0;
        this.INCASSATO = 0;
        this.RESIDUO = 0;
        this.TOTALE = 0;
        this.IMPOSTA = 0;
        this._READY = false;

        this.PRENOTAZIONEPIANIFICAZIONE = [];
        
    }

    //#region INIZIALIZZAZIONE NUOVA PRENOTAZIONE

    /**
     * Inizializza per una nuova prenotazione
     */
    initNewPrenotazione(idArea: string) {
        
        //Imposta i parametri nell'oggetto
        this.IDAREAOPERATIVA = idArea;
        this.DATA = new Date();
    }

    /**
     * UTILIZZATA
     * Imposta come oggetto di Pianificazione, quello passato
     * @param docPianificazione Nuovo oggetto di pianificazione
     */
    setPianificazioneSingola(docPianificazione) {
        if (docPianificazione) {
            if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
                this.PRENOTAZIONEPIANIFICAZIONE[0] = docPianificazione;
            }
            else {
                this.PRENOTAZIONEPIANIFICAZIONE.push(docPianificazione);
            }
        }
    }

    

    /**
     * Impostazione Area
     * @param idArea Area da applicare
     */
    SetArea(idArea: string) {
        
        this.IDAREAOPERATIVA = idArea;

        if (this.PRENOTAZIONEPIANIFICAZIONE) {
            this.PRENOTAZIONEPIANIFICAZIONE.forEach(element => {
                element.IDAREAOPERATIVA = idArea;
            }); 
        }
        
    }


     
    /**
     * Impostazione Utente 
     * @param idUtente Utente che prenota
     */
    setUtente(idUtente: string, _nominativo: string) {
        this.IDUTENTE = idUtente;
        if (_nominativo) {
            this.NOMINATIVO = _nominativo;
        }
        else {
            this.NOMINATIVO = '';
        }
    }

   

    /**
     * Ritorna il primo documento di pianificazione presente
     */
    getPianificazione() {
        let docPianificazione: PrenotazionePianificazione;
        if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
            docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[0];
        }
        return docPianificazione;
    }

    //#endregion

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);
    }

    setCollection(data: any) {

        this.PRENOTAZIONEPIANIFICAZIONE = [];

        if (data.PRENOTAZIONEPIANIFICAZIONE) {
            this.setCollectionPianificazioni(data);
        }
    }

    setCollectionPianificazioni(data: any) {
        data.PRENOTAZIONEPIANIFICAZIONE.forEach(element => {
            let newPianificazione = new PrenotazionePianificazione();

            newPianificazione.setJSONProperty(element);
            this.PRENOTAZIONEPIANIFICAZIONE.push(newPianificazione);
            
        })
    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA',
                        'IDUTENTE',
                        'NOMINATIVO',
                        'MOBILENUMBER',
                        'IDTIPOPAGAMENTO'];
        let arNumber = [];
        let arNumberDecimal = ['IMPORTO','INCASSATO','RESIDUO','IMPOSTA','TOTALE'];
        let arBoolean = [];
        let arDate = ['DATA'];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
}