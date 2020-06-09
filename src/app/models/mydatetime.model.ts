import * as moment from "moment";
export class MyDateTime {

//Formatta una data passata in ISO (Solo la parte data)
static formatDateISO(data: Date) {
    let intMese = data.getMonth() + 1;
    let intGiorno = data.getDate();
    let mese = (intMese > 9) ? (intMese + '') : ('0' + intMese);
    let giorno = (intGiorno > 9) ? (intGiorno + '') : ('0' + intGiorno);
    let format = [data.getFullYear(), mese, giorno].join('-');

    return format;
    }

//Formatta una data passata in ISO (Data e Ora)
static formatDateTimeISO(data: Date) {
    let prefixDate = MyDateTime.formatDateISO(data);
    let ore = (data.getHours() > 9) ? (data.getHours() + '') : ('0' + data.getHours());
    let minuti = (data.getMinutes() > 9) ? (data.getMinutes() + '') : ('0' + data.getMinutes());
    let secondi = (data.getSeconds() > 9) ? (data.getSeconds() + '') : ('0' + data.getSeconds());
    let final = prefixDate + ' ' + ore + ':' + minuti + ':' + secondi;

    return final;
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
        strDataOra = MyDateTime.formatDateISO(nuovaData);

        let ore = (applyDataOra.getHours() > 9) ? (applyDataOra.getHours() + '') : ('0' + applyDataOra.getHours());
        let minuti = (applyDataOra.getMinutes() > 9) ? (applyDataOra.getMinutes() + '') : ('0' + applyDataOra.getMinutes());
        let secondi = (applyDataOra.getSeconds() > 9) ? (applyDataOra.getSeconds() + '') : ('0' + applyDataOra.getSeconds());

        strDataOra = `${strDataOra} ${ore}:${minuti}:${secondi}`;

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

    let result = false;

    //Moment consente di decidere [ uguaglianza o ( esclusione di una data
    if (moment(endCheck).isBetween(minDateTime, maxDateTime,'minute','(]') || 
        moment(startCheck).isBetween(minDateTime, maxDateTime,'minute','[)') || 
        ( 
            moment(startCheck).isSameOrBefore(minDateTime,'minute') && moment(endCheck).isSameOrAfter(maxDateTime,'minute') 
        )) {

            result = true;
        }

    return result;

}

/**
 * Calcola il numero di Ore intercorse tra le due date ore
 * @param startDate Data Ora Iniziale (Inferiore)
 * @param endDate Data Ora Finale (Superiore)
 */
static durataOre(startDate: Date, endDate: Date): number {
    let ore = 0;
    if (startDate && endDate) {
        let mStart = moment(startDate);
        let mEnd = moment(endDate);
        ore = mEnd.diff(mStart, 'hours', true);
    }

    return ore;
}


}