import { IDDocument } from './iddocument.model';
import {  TipoCorso, StatoCorso, TargetSesso, Language, Giorni } from '../models/valuelist.model';
import { Settimana } from './settimana.model';


export class Corso extends IDDocument {

    DENOMINAZIONE: string;
    SIGLACALENDARIO: string;
    TIPO: TipoCorso;
    IDLIVELLOENTRATA: string;
    IDLIVELLOFINALE: string;
    IDSPORT: string;
    NUMEROLEZIONI: number;
    NUMPARTECIPANTI: number;
    MAXPARTECIPANTI: number;
    DATAINIZIO: Date;
    DATAFINE: Date;
    ORELEZIONE: number;
    ORAINIZIO: Date;
    STATO: StatoCorso;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    GIORNIPREVISTI: string; //Stringa separata da ; con indice dei giorni
    ISCRIZIONEDAL: Date;
    ISCRIZIONEAL: Date;
    TARGETSESSO: TargetSesso;

    _SETTIMANA: Settimana[]; //Giorni della Settimana del Corso

    DURATA: number;



    constructor() {
      super();
    }

    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
      //Chiamo IDDOcument
      super.setJSONProperty(data);

      //Sistemo la Settimana in italiano
      this.setSettimana(Language.italiano);
    }

    /**
     * Ritorna un'altra Settimana in un'altra lingua
     * @param language Lingua
     */
    getTranslateSettimana(language?: Language): Settimana[] {
      let myWeek = Settimana.getArray(false, language);
      let arGiorni = this.GIORNIPREVISTI.split(';');

      //Ciclo nei giorni
      arGiorni.forEach(charGiorno => {

        let index = parseInt(charGiorno.trim());

        if (index >= Giorni.domenica && index <= Giorni.sabato) {
            Settimana.selectDayArray(index, myWeek);
        }
      });


      return myWeek;
    }

    /**
     * Crea un Array di tipo Settimana con le giornate previste per il corso
     * @param language Lingua
     */
    setSettimana(language?: Language) {
      this._SETTIMANA = Settimana.getArray(false, language);
      let arGiorni = this.GIORNIPREVISTI.split(';');

      //Ciclo nei giorni
      arGiorni.forEach(charGiorno => {

        let index = parseInt(charGiorno.trim());

        if (index >= Giorni.domenica && index <= Giorni.sabato) {
            Settimana.selectDayArray(index, this._SETTIMANA);
        }
      });
    }








}