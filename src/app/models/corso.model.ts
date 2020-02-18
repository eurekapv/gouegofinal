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
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
     describerType(fieldName): TypeDefinition {
      let retType = TypeDefinition.char;
      let arNumber = ['TIPO','NUMEROLEZIONI', 'NUMPARTECIPANTI', 'MAXPARTECIPANTI', 
                      'ORELEZIONE', 'STATO', 'TARGETSESSO', 'DURATA'];
      let arDate = ['DATAINIZIO', 'DATAFINE', 'ISCRIZIONEDAL', 'ISCRIZIONEAL'];
      let arTime = ['ORAINIZIO'];
      
      if (arNumber.includes(fieldName)) {
        retType = TypeDefinition.number
      }
      else if (arDate.includes(fieldName)) {
        retType = TypeDefinition.date
      }
      else if (arTime.includes(fieldName)) {
        retType = TypeDefinition.time
      }
      else {
        retType = TypeDefinition.char;
      }

      return retType

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

    //Esegue la decodifica della proprieta
    //Tutte le proprietà hanno la chiave 
    //in un campo denominato IDXYZ 
    //e decodificate in campi _DESCRXYZ

    /**
     * 
     * @param propertyToDecode Nome della proprietà da decodificare
     * @param listDecode Lista con gli elementi
     * @param propertyLookup Nome della proprieta a cui attingere la decodifica
     */
    lookup(propertyToDecode: string, listDecode: any[], propertyLookup: string) {
      let namePropertyIDX = propertyToDecode;
      let namePropertyDESCR = '_DESCR' +  namePropertyIDX.substring(2, namePropertyIDX.length);
      let _this = this;
      

      //Proprieta Indice e Descrizione presenti
      if (_this.hasOwnProperty(namePropertyIDX) && _this.hasOwnProperty(namePropertyDESCR)) {
        if (listDecode && propertyLookup) {

          let element = listDecode.find(value => {
            return value.ID == _this[namePropertyIDX]
          });

          if (element) {
            if (element.hasOwnProperty(propertyLookup)) {
              _this[namePropertyDESCR] = element[propertyLookup];
            }
          }

        }
      }
      

    }





}