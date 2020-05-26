import { IDDocument } from './iddocument.model';
import { Language } from './valuelist.model';
import { Settimana } from './settimana.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

export class AperturaLocation extends IDDocument {
    GIORNO: number; //Da scemo ho messo da 1 a 7
    APERTOCHIUSO: boolean;
    DALLE1: Date;
    ALLE1: Date;
    DALLE2: Date;
    ALLE2: Date;

    constructor() {
        super();
    }

    
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [];
        let arNumber = ['GIORNO'];
        let arBoolean = ['APERTOCHIUSO'];
        let arDate = [];
        let arDateTime =[];
        let arTime = ['DALLE1','DALLE2','ALLE1','ALLE2'];

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }



    /**
     * Sovrascrive metodo di IDDocument e lo amplia
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
        

        super.setJSONProperty(data);

        //Il Giorno che arriva base 1 lo sposto a base 0
        this.GIORNO = this.GIORNO - 1;
    }



    getDateFromTimeString(timeString: string): Date {
        const splitTime = timeString.split(':');
        let ore = 0;
        let minuti = 0;
        let secondi = 0;
        let returnDate = new Date();

        for (let index = 0; index < splitTime.length; index++) {
            switch(index) {
                case 0: 
                    ore = Number.parseInt(splitTime[index]);
                    
                break;
                case 1: 
                    minuti = Number.parseInt(splitTime[index]);
                    
                break;
                case 2: 
                    secondi = Number.parseInt(splitTime[index]);
                break;

            }
                        
        }

        returnDate.setHours(ore,minuti,secondi);
        
        return returnDate;
    }



    /** Ritorna l'etichetta del giorno */
    getLabel(language?: Language) {

        let label = Settimana.getLabel(this.GIORNO, language);

        return label;
    }

    isOpen() {
        return this.APERTOCHIUSO;
    }

    /**
     * Ritorna l'orario impostato minore o maggiore di apertura o chiusura
     * UNDEFINED se non trovato oppure se la Location è chiusa
     * @param type min || max a seconda se su vuole l'orario inferiore o superiore
     */
    getOrario(type: string) {
        let value: Date;
        if (this.APERTOCHIUSO) {
            if (type == 'min') {
                if (this.DALLE1) {
                    value = this.DALLE1;
                }
                else if (this.DALLE2) {
                    value = this.DALLE2;
                }
            }
            else if (type == 'max') {
                if (this.ALLE2) {
                    value = this.ALLE2;
                }
                else if (this.ALLE1) {
                    value = this.ALLE1;
                }
            }
        }

        return value;
    }
}