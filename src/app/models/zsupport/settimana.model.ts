import { Language, Giorni } from './valuelist.model';

export class Settimana {
    index: number;

    label: string;
    smallLabel: string;
    xsLabel: string;

    selected: boolean;
    color: string;

    constructor(indexDay: number, language?: Language) {

        this.index = indexDay;
        this.selected = false;
        this.color = 'primary';

        this.setAllLabel(language);
    }

    /**
     * Imposto tutte le etichette
     * @param language Lingua
     */
    private setAllLabel(language?: Language) {

        //Prima determino la Label principale
        switch (language) {
            case Language.italiano:
                this.setItalianLabel();
                break;
            case Language.inglese:
                this.setEnglishLabel();
                break;
            case Language.spagnolo:
                this.setSpanishLabel();
                break;
            default:
                this.setItalianLabel();
                break;
        }

        //Ora costruisco le altre label
        this.smallLabel = this.label.substring(0, 3);
        this.xsLabel = this.label.substring(0, 1);
    }


    /**
     * Imposta le etichette dei giorni in italiano
     */
    private setItalianLabel() {
        
        switch (this.index) {
        case Giorni.domenica:
            this.label = 'domenica';
            break;
        case Giorni.lunedi:
            this.label = 'lunedi\'';
            break;
        case Giorni.martedi:
            this.label = 'martedi\'';
            break;
        case Giorni.mercoledi:
            this.label = 'mercoledi\'';
            break;
        case Giorni.giovedi:
            this.label = 'giovedi\'';
            break;        
        case Giorni.venerdi:
            this.label = 'venerdi\'';
            break;        
        case Giorni.sabato:
            this.label = 'sabato';
            break;                
        }
    }

    /**
    * Imposta le etichette dei giorni in italiano
    */
    private setEnglishLabel() {
        
        switch (this.index) {
        case Giorni.domenica:
            this.label = 'sunday';
            break;
        case Giorni.lunedi:
            this.label = 'monday';
            break;
        case Giorni.martedi:
            this.label = 'tuesday';
            break;
        case Giorni.mercoledi:
            this.label = 'wednesday';
            break;
        case Giorni.giovedi:
            this.label = 'thursday';
            break;        
        case Giorni.venerdi:
            this.label = 'friday';
            break;        
        case Giorni.sabato:
            this.label = 'saturday';
            break;                
        }
    }

    private setSpanishLabel() {
        
        switch (this.index) {
        case Giorni.domenica:
            this.label = 'domingo';
            break;
        case Giorni.lunedi:
            this.label = 'lunes';
            break;
        case Giorni.martedi:
            this.label = 'martes';
            break;
        case Giorni.mercoledi:
            this.label = 'miercoles';
            break;
        case Giorni.giovedi:
            this.label = 'jueve';
            break;        
        case Giorni.venerdi:
            this.label = 'viernes';
            break;        
        case Giorni.sabato:
            this.label = 'sabado';
            break;                
        }
    }

    
    /**
     * Ritorna un Array di Giornate
     * @param startSunday Calendario Inizia alla Domenica ?
     * @param language    Lingua Opzionale
     */
    static getArray(startSunday?: boolean, language?:Language): Settimana[] {
        let myWeek: Settimana[] = [];
        let startIndex = Giorni.lunedi;

        if (startSunday) {
            startIndex = Giorni.domenica;
        }

        // Ciclo dallo Start Index a 7
        for (let indice = startIndex; indice <= Giorni.sabato; indice++) {
            let newDay = new Settimana(indice, language);
            myWeek.push(newDay);
        }

        //Se ho iniziato al Lunedi, devo aggiungere in fondo la domenica
        if (startIndex == 1) {
            let newDay = new Settimana(Giorni.domenica, language);
            myWeek.push(newDay);
        }


        return myWeek;
    }


    /**
     * Imposta a selected un determinato giorno della settimana presente nell'array
     * @param indexDay Indice del Giorno da selezionare
     * @param myWeek Array Settimanale
     */
    static selectDayArray(indexDay: number, myWeek: Settimana[]) {
        if (myWeek) {
            myWeek.forEach(element => {
                if (element.index == indexDay) {
                    element.selected = true;
                }
            });
        }
    }


    /**
     * Ritorna in modalità rapida la label del Giorno
     * @param indexDay Numero del Giorno
     * @param language Lingua Opzionale
     */
    static getLabel(indexDay: number, language?: Language) {
        let newDay = new Settimana(indexDay, language);

        return newDay.label;
    }

    /**
     * Ritorna in modalità rapida la smallLabel del Giorno
     * @param indexDay Numero del Giorno
     * @param language Lingua Opzionale
     */
    static getsmallLabel(indexDay: number, language?: Language) {
        let newDay = new Settimana(indexDay, language);

        return newDay.smallLabel;
    } 

    /**
     * Ritorna in modalità rapida la xsLabel del Giorno
     * @param indexDay Numero del Giorno
     * @param language Lingua Opzionale
     */
    static getXsLabel(indexDay: number, language?: Language) {
        let newDay = new Settimana(indexDay, language);

        return newDay.xsLabel;
    }     
}