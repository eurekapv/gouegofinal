import * as moment from "moment";
import { TipoChiusura } from 'src/app/models/valuelist.model';
import { TypeDefinition } from './descriptor.model';

export class MyDateTime {

//Formatta una data passata in ISO (Solo la parte data)
static formatDateISO(data: Date): string {
    let intMese = data.getMonth() + 1;
    let intGiorno = data.getDate();
    let mese = (intMese > 9) ? (intMese + '') : ('0' + intMese);
    let giorno = (intGiorno > 9) ? (intGiorno + '') : ('0' + intGiorno);
    let format = [data.getFullYear(), mese, giorno].join('-');

    return format;
    }

//Formatta una data passata in ISO (Data e Ora)
static formatDateTimeISO(data: Date): string {
    let prefixDate = MyDateTime.formatDateISO(data);
    let ore = (data.getHours() > 9) ? (data.getHours() + '') : ('0' + data.getHours());
    let minuti = (data.getMinutes() > 9) ? (data.getMinutes() + '') : ('0' + data.getMinutes());
    let secondi = (data.getSeconds() > 9) ? (data.getSeconds() + '') : ('0' + data.getSeconds());
    let final = prefixDate + ' ' + ore + ':' + minuti + ':' + secondi;

    return final;
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
 * @param data Data
 * @param format Formattazione di moment.js da applicare
 */
static formatDate(data: Date, maskFormat: string): string {
    //https://momentjs.com/docs/#/displaying/
    return moment(data).format(maskFormat);
}


/**
* Trasforma la stringa in un oggetto di tipo Data
* @param strInput data / dataOra / Ora in formato stringa
*/
static stringToDateObject(strInput: string): Date {
 //1 - Devo capire cos'è
 let strDate = moment().format('YYYY-MM-DD');
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

/**
 * Aggiungo o sottrae da una data il periodo passato nei parametri
 * @param dateTime Data Ora di partenza
 * @param addOrSub Valore numerico positivo per aggiungere, neghativo per sottrarre
 * @param period Periodo da aggiungere o sottrarre
 */
static calcola(dateTime: Date, addOrSub: number, period:TypePeriod): Date {
    let value: number;
    let dReturn: Date;

    if (dateTime && period) {
        let mDate = moment(dateTime); //Oggetto di tipo moment
        if (addOrSub < 0) {
            value = addOrSub * -1;
            mDate.subtract(value, period);
        }
        else if (addOrSub > 0) {
            value = addOrSub;
            mDate.add(value, period);
        }

        dReturn = mDate.toDate();
    }

    return dReturn;
}


/**
 * Torna un valore della Value List TipoChiusura per indicare la festività
 * @param data Data da controllare
 */
static getFesta(data: Date): TipoChiusura{

    let tipoChiusura: TipoChiusura;

    let meseGiorno: string = moment(data).format('MMDD');

    let dataAngelo: Date;
    let maskAngelo: string = '';

    let dataPasqua: Date; 
    let maskPasqua: string =  '';

    dataPasqua = MyDateTime.calcolaPasqua(data.getFullYear());
    maskPasqua = moment(dataPasqua).format('MMDD');
    dataAngelo = MyDateTime.calcola(dataPasqua, 1, TypePeriod.days);
    maskAngelo = moment(dataAngelo).format('MMDD');

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
            tipoChiusura = 0;
        break;
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