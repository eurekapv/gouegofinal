import { SlotDay } from './slotday.model';
import { ValueList, Giorni } from '../valuelist.model';

export class SlotWeek {
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    SLOTMINUTES: number; //Durata in minuti per lo Slot standard nella location

    SLOTDAYS: SlotDay[];

    constructor() {
        this.SLOTDAYS = [];
        this.SLOTMINUTES = 30;
    }

    /**
     * Creazione dell'array SlotDay con tutte le giornate
     */
    initDays() {
        let arGiorni = ValueList.getArray(Giorni);

        this.SLOTDAYS = [];

        arGiorni.forEach(element => {
            let daySlot = new SlotDay();

            //Imposto il giorno
            daySlot.WEEKDAY = element.value;
            this.SLOTDAYS.push(daySlot)
        })
    }

    /**
     * Ritorna uno slotday presente nell'array
     * @param weekDayRequest WeekDay richiesto
     */
    getSlotDay(weekDayRequest: number) {
        return this.SLOTDAYS.find(element => {
            return element.WEEKDAY == weekDayRequest
        });
    }

    /**
     * Ritorna una copia di uno SlotDay 
     * 
     * @param dataGiorno Data richiesta
     * @param changeTimeDate Se impostata a TRUE viene cambiata la data presente negli slottime impostando la data Giorno
     */
    getCopySlotDay(dataGiorno: Date, changeTimeDate?: boolean): SlotDay {

        let weekDay = dataGiorno.getDay();
        let myCopySlot: SlotDay;
        let mySlot: SlotDay;

        mySlot = this.SLOTDAYS.find(element => {
                        return element.WEEKDAY == weekDay
                        });
        if (mySlot) {
            //Creo un nuovo oggetto e copio tutte le proprietà
            myCopySlot = new SlotDay();
            myCopySlot.copyFrom(mySlot);

            
            

            /* TUTTI GLI SLOTTIMES DEVONO RICEVERE LA STESSA GIORNATA */
            if (changeTimeDate) {
                myCopySlot.changeDateInSlotTime(dataGiorno);
            }
        }



        return myCopySlot;
                
    }

    /**
     * Crea per ogni giornata, tutti gli slot time
     */
    createSlotTimeDays() {

        //Ciclo sui giorni presenti
        this.SLOTDAYS.forEach(element => {
            element.createSlotTime(this.SLOTMINUTES);
        });
    }
}