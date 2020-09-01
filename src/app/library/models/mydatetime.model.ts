import * as moment from "moment";
import { TypeDefinition } from './descriptor.model';

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

//Formatta un orario passata  (Data e Ora)
static formatTime(data: Date, withSeconds:boolean =false) {

    
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
 * @param data Data
 * @param format Formattazione di moment.js da applicare
 */
static formatDate(data: Date, maskFormat: string) {
    //https://momentjs.com/docs/#/displaying/
    return moment(data).format(maskFormat);
}


/**
* Trasforma la stringa in un oggetto di tipo Data
* @param strInput data / dataOra / Ora in formato stringa
*/
static stringToDateObject(strInput: string): Date {
 //1 - Devo capire cos'è
 let tipo: TypeDefinition;
 let strDate = moment().format('YYYY-MM-DD');
 let strTime = '00:00:00'
 let timeZone = '+01:00';
 let strComplete = '';
 let dataReturn: Date;
 let arElement: string[];

 arElement = [];
 

 if (strInput.length !== 0) {

    //Spplitto Data, Ora, TimeZone
    arElement = MyDateTime.splitDateTime(strInput);

    if (arElement[0].length !== 0) {
        strDate = arElement[0];
    }

    if (arElement[1].length !== 0) {
        strTime = arElement[1];
    }   
    
    if (arElement[2].length !== 0) {
        timeZone = arElement[2];
    }
        
    //Non aggiungere il TimeZone perchè non da errori ma l'uso della proprietà data da problemi
    strComplete = `${strDate}T${strTime}`;
    dataReturn = moment(strComplete).toDate();


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
        strDataOra = MyDateTime.formatDateISO(nuovaData);

        let ore = (applyDataOra.getHours() > 9) ? (applyDataOra.getHours() + '') : ('0' + applyDataOra.getHours());
        let minuti = (applyDataOra.getMinutes() > 9) ? (applyDataOra.getMinutes() + '') : ('0' + applyDataOra.getMinutes());
        let secondi = (applyDataOra.getSeconds() > 9) ? (applyDataOra.getSeconds() + '') : ('0' + applyDataOra.getSeconds());

        strDataOra = `${strDataOra}T${ore}:${minuti}:${secondi}`;

        
        newReturn = moment(strDataOra).toDate();
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


/**
 * Calcola il numero di Ore intercorse tra le due date ore
 * @param inferiorDate Data Ora Iniziale (Inferiore)
 * @param superiorDate Data Ora Finale (Superiore)
 */
static durataAnni(inferiorDate: Date, superiorDate: Date): number {
    let anni = 0;
    if (inferiorDate && superiorDate) {
        let mStart = moment(inferiorDate);
        let mEnd = moment(superiorDate);
        anni = mEnd.diff(mStart, 'years', true);
    }

    return anni;
}


}