import { SlotTime } from './slottime.model';
import { PrenotazionePianificazione } from '../prenotazioni/prenotazionepianificazione.model';
import { MyDateTime, TypePeriod } from '../../library/models/mydatetime.model';
import { StatoSlot } from '../zsupport/valuelist.model';


export class SlotDay {
    WEEKDAY:    number;
    STARTTIME:  Date;
    ENDTIME:    Date;
    SLOTTIMES:  SlotTime[];
    APERTOCHIUSO: boolean;
    _TEMPLATELOCK: boolean; 

    ENDMIDDLE: Date;
    STARTMIDDLE: Date;
    
    
    constructor() {
        this.SLOTTIMES = [];
        this.APERTOCHIUSO = true;
        this._TEMPLATELOCK = true; //Il giorno è ancora bloccato in quanto solo template e non attualizzato (Non posso prenotare nulla ancora)

        this.setStandardTime();
    }


    /**
     * Copia tutte le proprietà dall'oggetto passato
     * @param oldObject Oggetto da cui copiare
     */
    copyFrom(oldObject: SlotDay) {
        this.WEEKDAY = oldObject.WEEKDAY;
        this.STARTTIME = oldObject.STARTTIME;
        this.ENDTIME = oldObject.ENDTIME;
        this.APERTOCHIUSO = oldObject.APERTOCHIUSO;
        this._TEMPLATELOCK = oldObject._TEMPLATELOCK;
        this.SLOTTIMES = [];

        oldObject.SLOTTIMES.forEach(elSlotTime => {
            let slot = new SlotTime(elSlotTime.START, elSlotTime.END);
            slot.selected = elSlotTime.selected;
            slot.STATO = elSlotTime.STATO;

            this.SLOTTIMES.push(slot);
        })
    }

    /**
     * segna come chiusi gli slot che sforano dentro un eventuale periodo intermedio di chiusura
     */
    disableClosedSlots(){
        if (this.STARTMIDDLE && this.ENDMIDDLE){
            this.SLOTTIMES.forEach(element => {
                if (element.END > this.ENDMIDDLE && element.START < this.STARTMIDDLE){
                    element.STATO = StatoSlot.chiuso;
                }
            })
        }
    }


    /**
     * setta i parametri di un'eventuale chiusura e riapertura intermedia
     * @param chiusura l'orario di chiusura intermedia
     * @param riapertura l'orario di riapertura dopo la chiusura intermedia
     */
    setChiusuraIntermedia(chiusura: Date, riapertura: Date){
        if (chiusura && riapertura){
            this.ENDMIDDLE = chiusura;
            this.STARTMIDDLE = riapertura;

        }
    }

    setStandardTime() {

        let adesso = new Date();
        this.STARTTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 8,0,0);
        this.ENDTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 20,0,0);
    }

    /**
     * Creazione degli Slot Time
     * @param minutiSlot Minuti di ogni slot
     */
    createSlotTime(minutiSlot: number) {
        let anno = 0;
        let mese = 0;
        let giorno = 0;
        let oreStart = 0;
        let minutiStart = 0;
        let oreEnd = 0;
        let minutiEnd = 0;


        

        if (this.APERTOCHIUSO) {
            anno = this.STARTTIME.getFullYear();
            mese = this.STARTTIME.getMonth();
            giorno = this.STARTTIME.getDate();
            oreStart = this.STARTTIME.getHours();
            oreEnd = this.ENDTIME.getHours();
            minutiStart = this.STARTTIME.getMinutes();
            minutiEnd = this.ENDTIME.getMinutes();

            let myData = {anno, mese, giorno};
            let myStart = {ore: oreStart, minuti: minutiStart};
            let myEnd = {ore: oreEnd, minuti: minutiEnd }


            
            this.SLOTTIMES = SlotTime.getArrayStandardSlot(myData, myStart, myEnd, minutiSlot);
            this.disableClosedSlots();
            
        }
    }

    /**
     * Imposta tutti i figli SlotTime applicando a START e END lo stesso orario ma sulla data passata
     * @param nuovaData Nuova Data da applicare
     */
    changeDateInSlotTime(nuovaData: Date) {
        
        if (this.SLOTTIMES) {
            this.SLOTTIMES.forEach(elSlotTime => {
                elSlotTime.changeDateInSlotTime(nuovaData);
            });
        }
    }

    /**
     * Effettua le operazioni per il cambio selezione di uno slot
     * @param idSlotTime SlotTime in cambiamento selection
     */
    changeSelectionSlotTime(actualSlot: SlotTime): PrenotazionePianificazione  {
        
        let newState: boolean;
        let contaSelected: number; 
        let findSlot: boolean;
        let findStart: boolean;
        let docPianificazione: PrenotazionePianificazione;
        
        if (actualSlot) {
            newState = !actualSlot.selected; //Il nuovo stato che assumerà lo Slot

            //Se il nuovo stato è disattivare, posso farlo
            if (newState == false) {
                
                contaSelected = 0; 
                findSlot = false;
                
                //Se prima dello Slot da disattivare ci fossero elementi selezionati, 
                // allora devo disattivare lo slot richiesto e tutti i seguenti
                this.SLOTTIMES.forEach(element => {
                    if (element.ID == actualSlot.ID) {
                        findSlot = true;
                        element.selected = false;
                    }
                    else if (!findSlot && element.selected) {
                        contaSelected++;
                    }
                    else if (findSlot && contaSelected > 0) {
                        element.selected = false;
                    }
                    

                })

            }
            else { 
                contaSelected = 0;
                findSlot = false;
                //Se il nuovo Stato è ATTIVARE devo effettuare l'operazione 
                //controllando le altre selezioni
                //Le selezioni massime possono essere solo 2
                this.SLOTTIMES.forEach(element => {

                    //Elemento selezionato
                    if (element.selected) {
                        //Se ne ho già selezionato 1, devo disattivare questo

                        if ((contaSelected >= 1 && !findSlot) || (findSlot && contaSelected !== 1) ) {
                            element.selected = false;
                        }
                        else {
                            contaSelected++;
                        }
                    }
                    else if (element.ID == actualSlot.ID) {


                        element.selected = true;
                        findSlot = true;

                        contaSelected++;
                    }
                });

                //Ora se ci sono 2 selezione posso selezionare tutto cio' che sta in mezzo
                if (contaSelected == 2) {

                    findStart = false;
                    let lastIndex = -1;

                    for (let index = 0; index < this.SLOTTIMES.length; index++) {
                        const element = this.SLOTTIMES[index];
                        if (element.selected && findStart) {
                            //Ho finito di selezionare - esco
                            lastIndex = index;
                            break;
                        }
                        else if (element.selected && !findStart) {
                            //Inizia adesso la selezione
                            findStart = true;
                        }
                        else if (findStart) {
                            //Ho trovato l'inizio e non ho ancora finito

                            //Qua in mezzo c'e' qualcosa di chiuso o occupato e quindi mi devo fermare
                            if (element.STATO == StatoSlot.chiuso || element.STATO == StatoSlot.occupato || element.STATO == StatoSlot.contattare) {
                                lastIndex = index;
                                break;
                            }
                            else {
                                element.selected = true;
                            }
                        }
                    }

                     //Tutto quello che sta dopo il lastIndex deve essere disattivato
                     if (lastIndex != -1 && lastIndex < this.SLOTTIMES.length) {
                        for (let index = lastIndex + 1; index < this.SLOTTIMES.length; index++) {
                            const element = this.SLOTTIMES[index];
                            element.selected = false;
                        }
                    }
                    
                }

            }

        }

        //Lo faccio fuori dagli If cosi creo sempre un oggetto
        //Qui cerco di creare un oggetto di PrenotazionePianificazione da restituire
        docPianificazione = this.getPrenotazionePianificazione();


        return docPianificazione;
        
    }


    getPrenotazionePianificazione(): PrenotazionePianificazione {
        let docPianificazione: PrenotazionePianificazione;
        let findStart = false;

        docPianificazione = new PrenotazionePianificazione();

        /**Devo cercare il primo selezionato e l'ultimo */
        if (this.SLOTTIMES) {

            this.SLOTTIMES.forEach(elSlot => {
                if (elSlot.selected) {
                    if (findStart) {
                        docPianificazione.DATAORAFINE = elSlot.END;
                        //Nel caso lo slot di End sia alle 00:00 allora sono le 00:00 del giorno seguente
                        if (elSlot.END.getHours() == 0 && elSlot.END.getMinutes() == 0) {
                            docPianificazione.DATAORAFINE = MyDateTime.calcola(elSlot.END, 1, TypePeriod.days);
                        }

                        docPianificazione.DURATAORE = MyDateTime.durataOre(docPianificazione.DATAORAINIZIO, docPianificazione.DATAORAFINE);
                    }
                    else {
                        findStart = true;
                        docPianificazione.DATAORAINIZIO = elSlot.START;
                        docPianificazione.DATAORAFINE = elSlot.END;
                        
                        if (elSlot.END.getHours() == 0 && elSlot.END.getMinutes() == 0) {
                            docPianificazione.DATAORAFINE = MyDateTime.calcola(elSlot.END, 1, TypePeriod.days);
                        }

                        docPianificazione.DURATAORE = MyDateTime.durataOre(docPianificazione.DATAORAINIZIO, docPianificazione.DATAORAFINE);
                    }
                }
            });

            
        }

        return docPianificazione;
    }

    /**
     * Cerca e ritorna uno SlotTime per id
     * @param idSlotTime id dello slottime da ricercare
     */
    findSlotTimeById(idSlotTime: string) {
        let findSlot: SlotTime;
        if (idSlotTime) {
            findSlot = this.SLOTTIMES.find(element => {
                return element.ID == idSlotTime;
            })
        }

        return findSlot;
    }
    
}