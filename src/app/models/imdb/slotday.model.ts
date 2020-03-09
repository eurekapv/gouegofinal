import { SlotTime } from './slottime.model';


export class SlotDay {
    WEEKDAY:    number;
    STARTTIME:  Date;
    ENDTIME:    Date;
    SLOTTIMES:  SlotTime[];
    APERTOCHIUSO: boolean;
    _TEMPLATELOCK: boolean; 
    
    
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
            slot.SELECTED = elSlotTime.SELECTED;
            slot.STATO = elSlotTime.STATO;

            this.SLOTTIMES.push(slot);
        })
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
    
}