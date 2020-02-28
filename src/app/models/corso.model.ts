import { IDDocument } from './iddocument.model';
import {  TipoCorso, StatoCorso, TargetSesso, Language, Giorni } from '../models/valuelist.model';
import { Settimana } from './settimana.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

export class Corso extends IDDocument {

    DENOMINAZIONE: string;
    SIGLACALENDARIO: string;
    TIPO: TipoCorso;
    IDLIVELLOENTRATA: string;
    _DESCRLIVELLOENTRATA: string;
    IDLIVELLOFINALE: string;
    IDSPORT: string;
    _DESCRSPORT: string;
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
    IDCATEGORIEETA: string;
    _DESCRCATEGORIEETA: string;
    _SETTIMANA: Settimana[]; //Giorni della Settimana del Corso

    DURATA: number;



    constructor() {
      super();

      this._DESCRCATEGORIEETA = ''
      this._DESCRLIVELLOENTRATA = '';
      this._DESCRSPORT = '';
    }

          /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DENOMINAZIONE',
                    'SIGLACALENDARIO',
                    'IDLIVELLOENTRATA',
                    '_DESCRLIVELLOENTRATA',
                    'IDLIVELLOFINALE',
                    'IDSPORT',
                    '_DESCRSPORT',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'GIORNIPREVISTI',
                    'IDCATEGORIEETA',
                    '_DESCRCATEGORIEETA'
                    ];
    let arNumber = ['TIPO',
                    'NUMEROLEZIONI',
                    'NUMPARTECIPANTI',
                    'MAXPARTECIPANTI',
                    'STATO',
                    'TARGETSESSO',
                    'DURATA'
                   ];
    let arDecimal = ['ORELEZIONE'];
    let arBoolean = [];
    let arDate = ['DATAINIZIO','DATAFINE','ISCRIZIONEDAL','ISCRIZIONEAL'];
    let arDateTime =[];
    let arTime = ['ORAINIZIO'];
    let arCollection = ['_SETTIMANA'];

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arDecimal, TypeDefinition.numberDecimal);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
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

    /**
     * Serve per capire sulla card cosa scrivere e quale data mettere
     * next -> Inizia il DATAINIZIO
     * during -> Termina il DATAFINE
     * stop -> Concluso il DATAFINE
     */
    tempoCorso() {
      let adesso = new Date();
      let value = "";

      if (this.DATAINIZIO > adesso) {
        value = "next";
      }
      else if (this.DATAFINE > adesso) {
        value = "during";
      }
      else {
        value = "stop";
      }

      return value;
    }

    

}