import { Tempistica, TipoChiusura } from 'src/app/models/valuelist.model';
import { TypeDefinition } from './descriptor.model';
import { addDays, addHours, addMilliseconds, addMinutes, addMonths, addQuarters, addSeconds, addWeeks, addYears, differenceInMinutes, differenceInSeconds, differenceInYears, endOfMonth, endOfWeek, format, formatISO, isAfter, isBefore, isDate, isEqual, isSameDay, isSameMinute, startOfMonth, startOfWeek, subDays, subHours, subMilliseconds, subMinutes, subMonths, subQuarters, subSeconds, subWeeks, subYears } from "date-fns";

export class MyDateTime {

    //#region SIMULAZIONE MOMENT JS
    //Funzioni non native di date-fns e ricreate

    /**
     * Controlla se Date è uguale o inferiore a dateCompare
     * @param date Data Primaria
     * @param dateCompare Data Comparativa
     * @param type Modalità confronto
     * @returns 
     */
    static isSameOrBefore(date: number | Date, dateCompare: number | Date, type:'minute'): boolean {
        let flagResult = false;

        if (type == 'minute') {
            //Controllo al minuto
            if (isBefore(date, dateCompare) || isSameMinute(date, dateCompare)) {
                flagResult = true;
            }
        }

        return flagResult;
    }

    /**
     * Controlla se Date è uguale o superiore a dateCompare
     * @param date Data Primaria
     * @param dateCompare Data Comparativa
     * @param type Modalità confronto
     * @returns 
     */
    static isSameOrAfter(date: number | Date, dateCompare: number | Date, type:'minute'): boolean {
        let flagResult = false;

        if (type == 'minute') {
            //Controllo al minuto
            if (isAfter(date, dateCompare) || isSameMinute(date, dateCompare)) {
                flagResult = true;
            }
        }

        return flagResult;
    }    

    /**
     * Controlla se Date è superiore a dateCompare
     * @param date Data Primaria
     * @param dateCompare Data Comparativa
     * @returns 
     */
    static isAfter(date: number | Date, dateCompare: number | Date): boolean {
        let flagResult = false;

        flagResult = isAfter(date, dateCompare);

        return flagResult;
    }    

    /**
     * Controlla se Date è inferiore a dateCompare
     * @param date Data Primaria
     * @param dateCompare Data Comparativa
     * @returns 
     */
    static isBefore(date: number | Date, dateCompare: number | Date): boolean {
        let flagResult = false;

        flagResult = isBefore(date, dateCompare);

        return flagResult;
    }     


    /**
     * Simula il comportamento isBetween di Moment (non disponibile nativamente in date-fns)
     * @param date 
     * @param from 
     * @param to 
     * @param inclusivity 
     * @returns 
     */
    static isBetween = (date: number | Date, from: number | Date, to: number | Date, inclusivity = '()') => {
        if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
            throw new Error('Inclusivity parameter must be one of (), [], (], [)');
        }
    
        const isBeforeEqual = inclusivity[0] === '[',
            isAfterEqual = inclusivity[1] === ']';
    
        return (isBeforeEqual ? (isEqual(from, date) || isBefore(from, date)) : isBefore(from, date)) &&
            (isAfterEqual ? (isEqual(to, date) || isAfter(to, date)) : isAfter(to, date));
    };    

    static isDate(value: any): boolean {
        let flagResult = false;
        flagResult = isDate(value);

        return flagResult;
    }


    /**
     * Serve per capire la situazione temporale rispetto ad oggi con le date passate
     * Ritorna dove si trova ADESSO rispetto alle date
     * 
     * FUTURO -> Inizia il DATAINIZIO
     * IN_CORSO -> Termina il DATAFINE
     * PASSATO -> Concluso il DATAFINE
     */
    static tempoMomento(inferiorDate: Date, superiorDate: Date):Tempistica {
        let adesso = new Date();
        let flagTemporale:Tempistica = Tempistica.PASSATO;
  
        

        //Sono presenti entrambi le date
        if (inferiorDate && superiorDate) {
            if (MyDateTime.isBetween(adesso, inferiorDate, superiorDate)) {
                flagTemporale = Tempistica.IN_CORSO;
            }
            else if (MyDateTime.isAfter(adesso, superiorDate)) {
                //E' finito
                flagTemporale = Tempistica.PASSATO;
            }
            else if (MyDateTime.isBefore(adesso, inferiorDate)) {
                //Deve iniziare
                flagTemporale = Tempistica.FUTURO;
            }
        }
        else if (inferiorDate && !superiorDate) {
            //So quando inizia ma non quando finisce
            if (MyDateTime.isBefore(adesso, inferiorDate)) {
                //Deve iniziare
                flagTemporale = Tempistica.FUTURO;
            }
            else {
                flagTemporale = Tempistica.IN_CORSO;
            }
        }
        else if (!inferiorDate && superiorDate) {
            //Non so l'inizio ma so la fine
            if (MyDateTime.isAfter(adesso, superiorDate)) {
                //E' finito
                flagTemporale = Tempistica.PASSATO;
            }
            else {
                flagTemporale = Tempistica.IN_CORSO;
            }
        }
        else {
            //Non ho le date
            flagTemporale = Tempistica.NULL;
        }

  
        return flagTemporale;
      }    

    //#endregion

//Formatta una data passata in ISO (Solo la parte data)
static formatDateISO(dateValue: Date, formatRepresentation: 'date' | 'time' | 'complete'): string {
    let isoValue = '';

    if (dateValue) {
        isoValue = formatISO(dateValue, {representation: formatRepresentation});
    }

    return isoValue;
}

//Formatta un orario passata  (Data e Ora)
static formatTime(data: Date, withSeconds:boolean =false): string {

    
    let ore = (data.getHours() > 9) ? (data.getHours() + '') : ('0' + data.getHours());
    let minuti = (data.getMinutes() > 9) ? (data.getMinutes() + '') : ('0' + data.getMinutes());
    let secondi = (data.getSeconds() > 9) ? (data.getSeconds() + '') : ('0' + data.getSeconds());

    let final =  ore + ':' + minuti;
    
    if (withSeconds) {
        final = final + ':' + secondi;
    }

    return final;
}

/**
 * 
 * @param dateValue Data
 * @param format Formattazione da applicare
 */
static formatDate(dateValue: Date, maskFormat: string): string {
    let dateFormatted = '';

    dateFormatted = format(dateValue, maskFormat);

    return dateFormatted;
}


/**
* Trasforma la stringa in un oggetto di tipo Data
* @param strInput data / dataOra / Ora in formato stringa
*/
static stringToDateObject(strInput: string): Date {
 //1 - Devo capire cos'è
 let strDate = format(new Date(), 'yyyy-MM-dd');
 let strTime = '00:00:00'
 let timeZone = '+01:00';
 let strComplete = '';
 let dataReturn: Date;
 let arElement: string[];
 
 arElement = [];
 
 if (strInput && strInput.length !== 0) {

    //Splitto Data, Ora, TimeZone
    arElement = MyDateTime.splitDateTime(strInput);

    if (arElement[0].length !== 0) {
        strDate = arElement[0];
    }

    if (arElement[1].length !== 0) {
        strTime = arElement[1];
    }
    else {
        strTime = '00:00:00';
    }  
    
    if (arElement[2].length !== 0) {
        timeZone = arElement[2];
    }
    
    //Non aggiungere il TimeZone perchè non da errori ma l'uso della proprietà data da problemi
    strComplete = `${strDate}T${strTime}`;
    dataReturn = new Date(strComplete);

      

    return dataReturn;
 }


}

/**
 * 
 * @param strDateTime Stringa di data e ora
 * @param arReturn Separa gli elementi in posizione 0 la data e 1 l'ora
 */
static splitDateTime(strDateTime:string):string[] {
    let tipo: TypeDefinition;
    let strDate = '';
    let strTime = '';
    let strTimeZone = '';
    let arReturn:string[];

    arReturn = [];

    if (strDateTime.length !== 0) {
        if (strDateTime.includes('-') || strDateTime.includes('/')) {

            if (strDateTime.includes(':')) {
                tipo = TypeDefinition.dateTime;

                //Cerchiamo il simbolo T oppure uno spazio
                strDateTime = strDateTime.replace(' ','T');
                strDateTime = strDateTime.replace('+','T');
                let el = strDateTime.split('T');

                for (let index = 0; index < el.length; index++) {
                    const element = el[index];
                    switch (index) {
                        case 0:
                            strDate = element;
                        break;

                        case 1:
                            strTime = element;
                        break;

                        case 2:
                            strTimeZone = element;
                        break;                        
                    
                        default:
                            break;
                    }
                    
                }

            }
            else {
                //Solo una data
                tipo = TypeDefinition.date;
                strDate = strDateTime;
            }
        }
        else if (strDateTime.includes(':')) {
            //Solo un orario
            tipo = TypeDefinition.time;
            strTime = strDateTime;
        }

    }

    arReturn.push(strDate);
    arReturn.push(strTime);
    arReturn.push(strTimeZone);
    
    return arReturn;
}

/**
 * Applica una nuova data all'oggetto applyDataOra mantenendo l'orario
 * @param nuovaData Nuova Data da applicare
 * @param applyDataOra DataOra a cui modificare la data
 */
static changeDateInTime(nuovaData: Date, applyDataOra: Date) {
    let strDataOra = '';
    let newReturn: Date;

    if (nuovaData && applyDataOra) {
        strDataOra = MyDateTime.formatDateISO(nuovaData,"date");

        let ore = (applyDataOra.getHours() > 9) ? (applyDataOra.getHours() + '') : ('0' + applyDataOra.getHours());
        let minuti = (applyDataOra.getMinutes() > 9) ? (applyDataOra.getMinutes() + '') : ('0' + applyDataOra.getMinutes());
        let secondi = (applyDataOra.getSeconds() > 9) ? (applyDataOra.getSeconds() + '') : ('0' + applyDataOra.getSeconds());

        strDataOra = `${strDataOra}T${ore}:${minuti}:${secondi}`;

        
        newReturn = new Date(strDataOra);
    }

    return newReturn;
}

/**
 * Crea una nuova Data Ora con la parte data e la parte ora
 * @param dateSource Parte Data
 * @param timeSource Parte Orario
 */
 static mergeDateAndTime(dateSource: Date, timeSource: Date) {
    let strDataOra = '';
    let newReturn: Date;

    if (dateSource && timeSource) {
        strDataOra = MyDateTime.formatDateISO(dateSource,"date");

        let ore = (timeSource.getHours() > 9) ? (timeSource.getHours() + '') : ('0' + timeSource.getHours());
        let minuti = (timeSource.getMinutes() > 9) ? (timeSource.getMinutes() + '') : ('0' + timeSource.getMinutes());
        let secondi = (timeSource.getSeconds() > 9) ? (timeSource.getSeconds() + '') : ('0' + timeSource.getSeconds());

        strDataOra = `${strDataOra}T${ore}:${minuti}:${secondi}`;

        
        newReturn = new Date(strDataOra);
    }

    return newReturn;
}

/**
 * Controlla se il Range Check cade dentro a min max DateTime
 * Usato per capire le occupazioni
 * @param startCheck Range da controllare (Start Date)
 * @param endCheck Range da controllare (End Date)
 * @param minDateTime 
 * @param maxDateTime 
 */
static dateTimeInside(startCheck: Date, endCheck: Date, minDateTime:Date, maxDateTime:Date): boolean { 
// CONTROLLO EFFETTUATO RITORNO TRUE SE:
// A) FINE IN MEZZO SENZA INIZIO            --> end > min && end <= max
// oppure B) INIZIO IN MEZZO SENZA FINE     --> start >= min && start < max
// oppure C) FUORI                          --> start <= min && end >= max

    let flagResult = false;

    //Simulo il comportament isBetween di Moment
    if (MyDateTime.isBetween(endCheck, minDateTime, maxDateTime, '(]') || 
        MyDateTime.isBetween(startCheck, minDateTime, maxDateTime, '[)') ||
        (MyDateTime.isSameOrBefore(startCheck, minDateTime,'minute') && MyDateTime.isSameOrAfter(endCheck, maxDateTime, 'minute'))) {
            flagResult = true;
    }

    //Moment consente di decidere [ uguaglianza o ( esclusione di una data
    // if (moment(endCheck).isBetween(minDateTime, maxDateTime,'minute','(]') || 
    //     moment(startCheck).isBetween(minDateTime, maxDateTime,'minute','[)') || 
    //     ( 
    //         moment(startCheck).isSameOrBefore(minDateTime,'minute') && moment(endCheck).isSameOrAfter(maxDateTime,'minute') 
    //     )) {

    //         result = true;
    //     }

    return flagResult;

}

/**
 * Calcola il numero di Ore intercorse tra le due date ore
 * @param startDate Data Ora Iniziale (Inferiore)
 * @param endDate Data Ora Finale (Superiore)
 * @returns Valore Decimale delle Ore
 */
static durataOre(startDate: Date, endDate: Date): number {
    let hourValue = 0;
    let minValue = 0;

    if (startDate && endDate) {
        //Inverto i parametri altrimenti mi ritorna un numero negativo
        minValue = differenceInMinutes(endDate,startDate);
        hourValue = minValue / 60;
    }

    return hourValue;
}


/**
 * Calcola il numero di Anni intercorse tra le due date ore
 * @param inferiorDate Data Ora Iniziale (Inferiore)
 * @param superiorDate Data Ora Finale (Superiore)
 */
static durataAnni(inferiorDate: Date, superiorDate: Date): number {
    let yearsValue = 0;

    if (inferiorDate && superiorDate) {
        //Inverto i parametri altrimenti mi ritorna un numero negativo
        yearsValue = differenceInYears(superiorDate, inferiorDate);
    }

    return yearsValue;
}

/**
 * Durata in secondi tra le due date
 * @param date1 
 * @param date2 
 */
static durataSecondi(date1: Date, date2: Date): number {
    let secondsValue = 0;

    if (date1 && date2) {
        secondsValue = differenceInSeconds(date2, date1);
    }

    return secondsValue;
}

/**
 * Aggiungo o sottrae da una data il periodo passato nei parametri
 * @param startDateTime Data Ora di partenza
 * @param addOrSub Valore numerico positivo per aggiungere, neghativo per sottrarre
 * @param period Periodo da aggiungere o sottrarre
 */
static calcola(startDateTime: Date, addOrSub: number, period:TypePeriod): Date {
    let value: number;
    let returnDate: Date;

    if (startDateTime && period) {

        switch (period) {

            case TypePeriod.years:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addYears(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subYears(startDateTime, value);
                }
            break;

            case TypePeriod.quarters:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addQuarters(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subQuarters(startDateTime, value);
                }
            break;            

            case TypePeriod.months:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addMonths(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subMonths(startDateTime, value);
                }
            break;            

            case TypePeriod.weeks:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addWeeks(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subWeeks(startDateTime, value);
                }
            break;            

            case TypePeriod.days:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addDays(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subDays(startDateTime, value);
                }
            break;

            case TypePeriod.hours:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addHours(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subHours(startDateTime, value);
                }
            break;

            case TypePeriod.minutes:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addMinutes(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subMinutes(startDateTime, value);
                }
            break;            

            case TypePeriod.seconds:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addSeconds(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subSeconds(startDateTime, value);
                }
            break;

            case TypePeriod.milliseconds:
                if (addOrSub > 0) {
                    //Aggiungo
                    value = addOrSub;
                    returnDate = addMilliseconds(startDateTime, value);
                }
                else {
                    //Sottraggo
                    value = addOrSub * -1;
                    returnDate = subMilliseconds(startDateTime, value);
                }
            break;

            default:
                returnDate = startDateTime;
                break;
        }
    }

    return returnDate;
}

/**
 * Compara la componente Data (non ora) e ritorna TRUE se sono uguali
 * @param date1 
 * @param date2 
 */
static compareEqualDate(date1: Date, date2: Date): boolean {
    let flagResult = false;

    if (date1 && date2) {
        flagResult = isSameDay(date1, date2);
    }

    return flagResult;
}


/**
 * Torna un valore della Value List TipoChiusura per indicare la festività
 * @param dateValue Data da controllare
 */
static getFesta(dateValue: Date): TipoChiusura {

    let tipoChiusura: TipoChiusura;

    let meseGiorno: string = '';

    let dataAngelo: Date;
    let maskAngelo: string = '';

    let dataPasqua: Date; 
    let maskPasqua: string =  '';

    if (dateValue) {
        //Stringa della data come MeseGiorno
        meseGiorno = MyDateTime.formatDate(dateValue, 'MMdd');
        //Richiedo la Datad Pasquale per l'anno
        dataPasqua = MyDateTime.calcolaPasqua(dateValue.getFullYear());
        maskPasqua = MyDateTime.formatDate(dataPasqua, 'MMdd');
        //Data dell'Angelo il giorno seguente
        dataAngelo = MyDateTime.calcola(dataPasqua, 1, TypePeriod.days);
        maskAngelo = MyDateTime.formatDate(dataAngelo, 'MMdd');
    
        switch (meseGiorno){
            case '0325':
              tipoChiusura = TipoChiusura.aprile25
              break;
      
            case '1208':
                tipoChiusura = TipoChiusura.dicembre8
                break;
      
            case '0815':
              tipoChiusura = TipoChiusura.ferragosto;
              break;
      
            case '0602':
              tipoChiusura = TipoChiusura.giugno2;
              break;
      
            case '0501':
                tipoChiusura = TipoChiusura.maggio1;
            break;
            
            case '1225':
                tipoChiusura = TipoChiusura.natale;
            break;
                
            case '1226':
                tipoChiusura = TipoChiusura.santoStefano;
            break;
                
            case maskPasqua:
                tipoChiusura = TipoChiusura.pasquaCattolica;
            break;
                      
            case maskAngelo:
                tipoChiusura = TipoChiusura.pasquaCattolica;
            break;
    
            default:
                tipoChiusura = TipoChiusura.nofesta;
            break;
          }

    }
    return tipoChiusura;


}

/**
 * Calcola la data di Pasqua per l'anno
 * @param anno Anno
 */
static calcolaPasqua(anno: number): Date {

    let a=0, b=0, c=0, d=0, e=0, m=0, n=0, giorno=0, mese=0;

    
    if(anno <= 2099){
        m = 24;
        n = 5;
    }
    else if(anno <= 2199){
        m = 24;
        n = 6;
    }
    else if(anno <= 2299){
        m = 25;
        n = 0;
    }
    else if(anno <= 2399){
        m = 26;
        n = 1;
    }
    else if(anno <= 2499){
        m = 25;
        n = 1;
    }

    a = anno% 19;
    b = anno% 4;
    c = anno% 7;

    d = ((19 * a) + m) % 30;
    e = ((2*b) + (4*c) + (6*d) + n) % 7;



    if ((d + e) < 10){
        giorno = d + e + 22;
        mese = 3;
    }
    else {
        giorno = d + e - 9;
        mese = 4;
    }

    if (Math.floor(giorno) == 26 && Math.floor(mese) == 4){
        giorno = 19;
        mese = 4;
    }

    if (Math.floor(giorno) == 25 && Math.floor(mese) == 4 && d == 20 && e == 6 && a > 10){
        giorno = 10;
        mese = 4;
    }
    
    
    let dataReturn = new Date(anno, Math.floor(mese-1), Math.floor(giorno));
    return dataReturn;
    
}


/**
 * Con la data passata calcola una data di inizio/fine della settimana 
 * o del mese in cui myDate è contenuta
 * @param dateValue Data da utilizzare
 * @param based Il calcolo è effettuata per la settimana o il mese
 * @param where Si vuole la data di inizio o fine
 */
static getStartEndDate(dateValue: Date, based:'week'|'month', where:'start'|'end'): Date {
    let resultDate: Date;

    if (dateValue) {
        if (where == 'start') {
            switch (based) {
                case 'week':
                    resultDate = startOfWeek(dateValue);
                    break;
                case 'month':
                    resultDate = startOfMonth(dateValue);
                    break;                
            
                default:
                    break;
            }
        }
        else if (where == 'end') {

            switch (based) {
                case 'week':
                    resultDate = endOfWeek(dateValue);
                    break;
                case 'month':
                    resultDate = endOfMonth(dateValue);
                    break;                
            
                default:
                    break;
            }
        }
    }

    return resultDate;
}


/**
 * Crea una Data senza l'orario
 * @param dateValue 
 */
static getOnlyDate(dateValue: Date): Date {
    let dateResult:Date;

    dateResult = new Date(MyDateTime.formatDateISO(dateValue,"date"));

    return dateResult;
}



}

export enum TypePeriod {
    years           = 'y',
    quarters        = 'Q',
    months          = 'M',
    weeks           = 'w',
    days	        ='d',
    hours	        ='h',
    minutes	        ='m',
    seconds	        ='s',
    milliseconds	='ms'
}


export enum ModesCalendar {
    date = 'date',
    dateTime = 'date-time',
    month = 'month',
    monthYear = 'month-year',
    yearMonth = 'year-month',
    year = 'year',
    time = 'time',
    timeDate = 'time-date',
  }

  