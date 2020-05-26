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

    constructor() {
        super();

        this.PRENOTAZIONEPIANIFICAZIONE = [];
        
    }


    /**
     * Inizializza per una nuova prenotazione
     */
    initNewPrenotazione(idArea: string, idLocation: string) {
        let newPianificazione = new PrenotazionePianificazione();

        //Imposta i parametri nell'oggetto e crea 1 Pianificazione
        this.IDAREAOPERATIVA = idArea;
        this.DATA = new Date();

        newPianificazione.IDAREAOPERATIVA = idArea;
        newPianificazione.IDLOCATION = idLocation;
        this.PRENOTAZIONEPIANIFICAZIONE.push(newPianificazione);
    }

    //#region INIZIALIZZAZIONE NUOVA PRENOTAZIONE

    /**
     * Preparazione di una nuova prenotazione
     */
    newPrenotazioneInit() {
        let newPianificazione = new PrenotazionePianificazione();
        this.DATA = new Date();

        this.PRENOTAZIONEPIANIFICAZIONE.push(newPianificazione);

    }
    /**
     * Impostazione Area
     * @param idArea Area da applicare
     */
    newPrenotazioneSetArea(idArea: string) {
        let docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[0];
        this.IDAREAOPERATIVA = idArea;
        docPianificazione.IDAREAOPERATIVA = idArea;
    }


    /**
     * Impostazione Location
     * @param idLocation Location da applicare
     */
    newPrenotazioneSetLocation(idLocation: string) {
        let docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[0];
        docPianificazione.IDLOCATION = idLocation;
    }   
    
    /**
     * Impostazione Utente 
     * @param idUtente Utente che prenota
     */
    newPrenotazioneSetUtente(idUtente: string) {
        this.IDUTENTE = idUtente;
    }

    /**
     * Imposta il campo nella prenotazione
     * @param idCampo Campo selezionato
     */
    newPrenotazioneSetIDCampo(idCampo: string) {
        let docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[0];
        docPianificazione.IDCAMPO = idCampo;
    }    

    /**
     * Ritorna il primo documento di pianificazione presente
     */
    getPianificazione() {
        return this.PRENOTAZIONEPIANIFICAZIONE[0];
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