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
     * Crea per ogni giornata, tutti gli slot time
     */
    createSlotTimeDays() {

        //Ciclo sui giorni presenti
        this.SLOTDAYS.forEach(element => {
            element.createSlotTime(this.SLOTMINUTES);
        });
    }
}