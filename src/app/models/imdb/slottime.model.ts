import { StatoSlot } from '../valuelist.model';
import * as moment from "moment";
import { MyDateTime } from '../mydatetime.model';


/**
 * Classe che identifica una linea oraria di una prenotazione (slot)
 */
export class SlotTime {
    START: Date;
    END: Date;
    STATO: StatoSlot;
    SELECTED: boolean;

    
    
    constructor(inizioTime: Date, fineTime: Date) {
        this.START = inizioTime;
        this.END = fineTime;
        this.SELECTED = false;
        this.STATO = StatoSlot.libero;
    }


    /** Ritorna un array degli slot da impostare */
    static getArrayStandardSlot( data: {
                                    anno: number, 
                                    mese: number, 
                                    giorno: number
                                }, 
                                start: {ore: number, minuti:number},
                                end: {ore: number, minuti:number},
                                minuteSlot: number
    ): SlotTime[] {

        let arSlots: SlotTime[] = [];
        let startDate = new Date(data.anno, data.mese, data.giorno, start.ore, start.minuti, 0);
        let endDate = new Date(data.anno, data.mese, data.giorno, end.ore, end.minuti, 0);
        let countWrapper = moment(startDate);
        let endWrapper = moment(endDate);
        

        /** Mentre la data è inferiore o uguale */
        while (countWrapper.isSameOrBefore(endWrapper)) {

            //Al count aggiungo i minuti dello slot
            let endSlotWrapper = moment(countWrapper.toDate());
            endSlotWrapper.add(minuteSlot, 'm');
            
            //Creo lo Slot
            let slotBlock = new SlotTime(countWrapper.toDate(), endSlotWrapper.toDate());
            
            //Aggiungo all'array di ritorno
            arSlots.push(slotBlock);
         

            //Aumento il Count dei minuti di slot
            countWrapper.add(minuteSlot, 'm');

        }

        return arSlots;
    }

    /**
     * Imposta a START e END l'orario presente ma sulla data passata
     * @param nuovaData Nuova data da applicare
     */
    changeDateInSlotTime(nuovaData: Date) {
        if (nuovaData) {
            if (this.START) {
                //Aggiorno la data 
                this.START = MyDateTime.changeDateInTime(nuovaData, this.START);
                
            }

            if (this.END) {
                //Aggiorno la data 
                this.END = MyDateTime.changeDateInTime(nuovaData, this.END);
                
            }
        }
    }
    
}