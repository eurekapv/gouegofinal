import { IDDocument, TypeDefinition } from './iddocument.model';
import { Language } from './valuelist.model';
import { Settimana } from './settimana.model';

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
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
    describerType(fieldName): TypeDefinition {
        //DEFUALT TIPO TIME
        let retType = TypeDefinition.time;
        if (fieldName == 'GIORNO') {
          retType = TypeDefinition.number;
        }
        else if (fieldName == 'APERTOCHIUSO') {
            retType = TypeDefinition.boolean
        }
  
        return retType
  
      }

    /**
     * Sovrascrive metodo di IDDocument e lo amplia
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
        

        super.setJSONProperty(data);

        //Il Giorno che arriva base 1 lo sposto a base 0
        this.GIORNO = this.GIORNO - 1;

        if (data.DALLE1) {
            this.DALLE1 = this.getDateFromTimeString(data.DALLE1);
        }

        if (data.ALLE1) {
            this.ALLE1 = this.getDateFromTimeString(data.ALLE1);
        }

        if (data.DALLE2) {
            this.DALLE2 = this.getDateFromTimeString(data.DALLE2);
        }

        if (data.ALLE2) {
            this.ALLE2 = this.getDateFromTimeString(data.ALLE2);
        }

        

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
}