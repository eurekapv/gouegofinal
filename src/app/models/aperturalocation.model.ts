import { IDDocument } from './iddocument.model';

export class AperturaLocation extends IDDocument {
    GIORNO: number;
    APERTOCHIUSO: boolean;
    DALLE1: Date;
    ALLE1: Date;
    DALLE2: Date;
    ALLE2: Date;

    constructor() {
        super();
    }

    /**
     * Sovrascrive metodo di IDDocument e lo amplia
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
        

        super.setJSONProperty(data);

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

        console.log(this);

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
        console.log(returnDate);
        return returnDate;
    }



    /** Ritorna l'etichetta del giorno */
    getLabel() {
        let label = '';
        switch (this.GIORNO) {
        case 1:
            label = 'domenica';
            break;
        case 2:
            label = 'lunedi\'';
            break;
        case 3:
            label = 'martedi\'';
            break;
        case 4:
            label = 'mercoledi\'';
            break;
        case 5:
            label = 'giovedi\'';
            break;        
        case 6:
            label = 'venerdi\'';
            break;        
        case 7:
            label = 'sabato';
            break;                
        }

        return label;
    }

    isOpen() {
        return this.APERTOCHIUSO;
    }
}