import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PrenotazionePianificazione } from './prenotazionepianificazione.model';
import { PaymentChannel } from './valuelist.model';

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
    MSGINVALID: string;
    PRENOTAZIONEPIANIFICAZIONE: PrenotazionePianificazione[];
    IDTRANSACTION: string;
    CHANNELPAYMENT: PaymentChannel;

    ISVALID: boolean; //Parametro indica che tutti i conteggi sono effettuati, 
                     //si puo' procedere al pagamento finale

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        if (!onlyInstance) {

            this.IMPORTO = 0;
            this.INCASSATO = 0;
            this.RESIDUO = 0;
            this.TOTALE = 0;
            this.IMPOSTA = 0;
            this.ISVALID = false;
            this.MSGINVALID = '';
            this.IDTRANSACTION = '';
        }


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
     * ritorna il docPianificazione con id specificato; se id non è specificato, ritorna il primo documento di pianificazione presente
     */
    getPianificazione(idPianificazione?: string) {
        let docPianificazione: PrenotazionePianificazione;
        let index: number;

        if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {

            if(idPianificazione && idPianificazione.length > 0){
                index = this.getIndexPianificazione(idPianificazione);
            }   
            else{
                index = 0;
            }
            docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[index];
        }
        return docPianificazione;
    }

    //#endregion

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);

        //Imposto che il documento è originale
        this.setOriginal();
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
     * Ritorna il descrittore della Prenotazione
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA',
                        'IDUTENTE',
                        'NOMINATIVO',
                        'MOBILENUMBER',
                        'IDTIPOPAGAMENTO',
                        'MSGINVALID',
                        'IDTRANSACTION'];
        let arNumber = ['CHANNELPAYMENT'];
        let arNumberDecimal = ['IMPORTO','INCASSATO','RESIDUO','IMPOSTA','TOTALE'];
        let arBoolean = ['ISVALID'];
        let arDate = ['DATA'];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'Prenotazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'PRENOTAZIONE';
        objDescriptor.describeField = 'NOMINATIVO';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDUTENTE','Utente');
        
        
        return objDescriptor;
    }



    /**
     * Converte il JSON ricevuto e ritorna una Prenotazione
     * @param JsonData Dati JSON ricevuti
     */
    static getPrenotazioneFromJson(JsonData: string): Prenotazione {
        let newPrenotazione = new Prenotazione();
        newPrenotazione.setJSONProperty(JsonData);
  
        return newPrenotazione;
      }

      /**
       * Ritorna l'indice dell'oggetto pianificazione con id specificato
       * @param id l'id dell'oggetto pianificazione
       */
      getIndexPianificazione(id: string):number
      {
        for (let index = 0; index < this.PRENOTAZIONEPIANIFICAZIONE.length; index++) {
            const element = this.PRENOTAZIONEPIANIFICAZIONE[index];
            if (element.ID==id)
            {
                return index;
            }  
        }
      }

      /**
       * Ritorna il valore che è necessario pagare
       */
      get amountPayment(): number {
        let myAmount: number = 0;
        if(this.INCASSATO < this.IMPORTO) {
            myAmount = this.IMPORTO - this.INCASSATO;
        }

        return myAmount;
      }


      /**
       * Stato del pagamento in formato testo
       * @param showForPay: se TRUE verrà restituito un messaggio per effettuare il pagamento
       */
      getCaptionStatePayment(showForPay: boolean = false): string {
        let caption = '';

        if (this.amountPayment != 0) {
            if (showForPay) {
                caption = 'Paga Ora';
            }
            else {
                caption = 'Prenotazione da pagare';
            }
        }
        else {

            caption = 'Prenotazione pagata';
        }
        return caption;
      }


      
    
}