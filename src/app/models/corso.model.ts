import { IDDocument } from '../library/models/iddocument.model';
import {  TipoCorso, StatoCorso, TargetSesso, Language, Giorni, ModalitaFruizione } from '../models/valuelist.model';
import { Settimana } from './settimana.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { CorsoProgramma } from './corsoprogramma.model';
import { PianificazioneCorso } from './pianificazionecorso.model';

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
    CORSOPROGRAMMA: CorsoProgramma[];
    PIANIFICAZIONECORSO: PianificazioneCorso[];
    MODFRUIZIONE: ModalitaFruizione;
    STATODINAMICO: StatoCorso;
    PREZZOLORDO: number;
    
    

    constructor(onlyInstance?:boolean) {
      super(onlyInstance);

      if (!onlyInstance) {

        this._DESCRCATEGORIEETA = ''
        this._DESCRLIVELLOENTRATA = '';
        this._DESCRSPORT = '';
      }


      this.CORSOPROGRAMMA = [];
      this.PIANIFICAZIONECORSO = [];

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
                    'STATODINAMICO',
                    'TARGETSESSO',
                    'DURATA'
                   ];
    let arDecimal = ['ORELEZIONE','PREZZOLORDO'];
    let arBoolean = [];
    let arDate = ['DATAINIZIO','DATAFINE','ISCRIZIONEDAL','ISCRIZIONEAL'];
    let arDateTime =[];
    let arTime = ['ORAINIZIO'];

    objDescriptor.className = 'Corso';
    objDescriptor.classWebApiName = 'CORSO';
    objDescriptor.doRemote = true;
    objDescriptor.describeField = 'DENOMINAZIONE';
    
    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arDecimal, TypeDefinition.numberDecimal);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);

    objDescriptor.addCollection('CORSOPROGRAMMA','CorsoProgramma','IDCORSO');
    objDescriptor.addCollection('PIANIFICAZIONECORSO','PianificazioneCorso','IDCORSO');


    objDescriptor.setRelation('IDSPORT','Sport');
    objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    objDescriptor.setRelation('IDLOCATION','Location');
    objDescriptor.setRelation('IDCAMPO','Campo');
    objDescriptor.setRelation('IDLIVELLOENTRATA','Livello');
    objDescriptor.setRelation('IDLIVELLOFINALE','Livello');
    objDescriptor.setRelation('IDCATEGORIEETA','CategoriaEta');
    
    


    

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

      this.setCollection(data);

      this.setOriginal();

    }

    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data: any) {
      this.CORSOPROGRAMMA = [];
      this.PIANIFICAZIONECORSO = [];

      if (data.CORSOPROGRAMMA) {
        this.setCollectionCorsoProgramma(data.CORSOPROGRAMMA);
      }

      if (data.PIANIFICAZIONECORSO) {
        this.setCollectionPianificazioneCorso(data.PIANIFICAZIONECORSO);
      }
      
    }

    /**
     * Imposta la collection CorsoProgramma
     * @param arPROGRAMMA JSON Ricevuti
     */
    setCollectionCorsoProgramma(arPROGRAMMA: any[]) {

      this.CORSOPROGRAMMA = [];

      if (arPROGRAMMA) {
        arPROGRAMMA.forEach(element => {
          
          // Ricerco se esiste già
          let newProgramma = this.getCorsoProgrammaByID(element.ID);

          //Non esiste lo creo nuovo
          if (!newProgramma) {

            newProgramma = new CorsoProgramma();
            newProgramma.setJSONProperty(element);
            this.CORSOPROGRAMMA.push(newProgramma);

          }
          else {
            //Reimposto i valori
            newProgramma.setJSONProperty(element);
          }


        })
      }
    }

    /**
     * Ritorna l'elemento di Corso Programma che corrisponde con ID
     */
    getCorsoProgrammaByID(idCorsoProgramma): CorsoProgramma {
        // Ricerco se esiste già
        let newProgramma = this.CORSOPROGRAMMA.find(elProgramma => {
          return elProgramma.ID == idCorsoProgramma
        });

        return newProgramma;
    }

    /**
     * Imposta la collection Pianificazioni Corso
     * @param arPianificazioni JSON Ricevuti
     */
    setCollectionPianificazioneCorso(arPianificazioni: any[]) {

      this.PIANIFICAZIONECORSO = [];

      if (arPianificazioni) {
        arPianificazioni.forEach(element => {
          
          // Ricerco se esiste già
          let newPianificazione = this.getPianificazioneCorsoByID(element.ID);

          //Non esiste lo creo nuovo
          if (!newPianificazione) {

            newPianificazione = new PianificazioneCorso();
            newPianificazione.setJSONProperty(element);
            this.PIANIFICAZIONECORSO.push(newPianificazione);

          }
          else {
            //Reimposto i valori
            newPianificazione.setJSONProperty(element);
          }


        })
      }
    }

    /**
     * Ritorna l'elemento di Pianificazione Corso che corrisponde con ID
     */
    getPianificazioneCorsoByID(idPianificazioneCorso): PianificazioneCorso {
        // Ricerco se esiste già
        let findPianificazioneCorso = this.PIANIFICAZIONECORSO.find(elPianificazione => {
          return elPianificazione.ID == idPianificazioneCorso
        });

        return findPianificazioneCorso;
    }

    /**
     * Ritorna un'altra Settimana in un'altra lingua
     * @param language Lingua
     */
    getTranslateSettimana(language?: Language): Settimana[] {
      let myWeek = Settimana.getArray(true, language);
      let arGiorni = this.GIORNIPREVISTI.split(';');

      //GIORNIPREVISTI contiene 1 Dom, 2 Lun, 3 Mart

      //Ciclo nei giorni
      arGiorni.forEach(charGiorno => {

        let index = parseInt(charGiorno.trim());
        //Vado indietro 
        index = index -1;
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
      //Chiedo un Array Settimana con inizio Domenica
      this._SETTIMANA = Settimana.getArray(true, language);
      let arGiorni = this.GIORNIPREVISTI.split(';');

      //In giorni previsti c'e' Dom 1, Lun 2 etc

      //Ciclo nei giorni
      arGiorni.forEach(charGiorno => {

        let index = parseInt(charGiorno.trim());
        //Porto a base 0 cosi' Domenica è 0 Lun 1 etc
        index = index -1;
        if (index >= Giorni.domenica && index <= Giorni.sabato) {
            Settimana.selectDayArray(index, this._SETTIMANA);
        }
      });
    }

    /**
     * Partendo dall'Array _SETTIMANA crea un array solo per le Giornate selezionate
     */
    getArrayGiorniCorso(): Settimana[] {
      let onlyDays:Settimana[] = [];

      onlyDays = this._SETTIMANA.filter(element => {
        return element.selected == true
      });

      return onlyDays;
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


    /**
     * Ritorna TRUE se Oggi è possibile iscriversi al corso
     */
    flagIscrizioniAperte(): boolean {
      let flag: boolean = false;

      if (this.STATODINAMICO == StatoCorso.iscrizioniAperte) {
        flag = true;
      }

      return flag;
    }

    /**
     * Ritorna una icona a seconda del tipo Corso
     */
    getIcon() {
      let nameIcon= 'ribbon';

      switch (this.TIPO) {
        case TipoCorso.corso:
          nameIcon = 'ribbon';
          break;
        
        case TipoCorso.prova: 
          nameIcon = 'trail-sign';
          break;
      
        default:
          nameIcon = 'ribbon';
          break;
      }

      return nameIcon;
      
    }

    /**
     * Controllando il valore del PREZZOLORDO indica se il Corso è Gratuito o a Pagamento
     */
    isAPagamento(): boolean {
      let flagPagamento: boolean;
      flagPagamento = false;
      if (this.PREZZOLORDO && this.PREZZOLORDO != 0) {
        flagPagamento = true;
      }


      return flagPagamento;
    }


    
    /**
     * Controlla se esiste un programma del corso
     * @returns TRUE se esiste testo come programma del corso
     */
    existProgrammaCorso(): boolean {
      let exist:boolean = false;
      if (this.CORSOPROGRAMMA) {
        if (this.CORSOPROGRAMMA.length != 0) {
          for (let index = 0; index < this.CORSOPROGRAMMA.length; index++) {
            const element = this.CORSOPROGRAMMA[index];
            if (element.TESTOHTML && element.TESTOHTML.length != 0) {
              exist = true;
              break;
            }
            
          }
        }
      }

      return exist;
    }

    /**
     * Anche se ci sono piu record li combina con un <BR>
     * @returns Testo HTML Programma corso completo
     */
    getFullProgrammaHTML(): string {
      
      let txtReturn = '';
      if (this.CORSOPROGRAMMA) {
        if (this.CORSOPROGRAMMA.length != 0) {
          for (let index = 0; index < this.CORSOPROGRAMMA.length; index++) {
            const element = this.CORSOPROGRAMMA[index];
            if (element.TESTOHTML && element.TESTOHTML.length != 0) {
              if (txtReturn.length != 0) {
                txtReturn += '<BR>';
              }
              txtReturn += element.TESTOHTML;
            }
            
          }
        }
      }

      return txtReturn;
    }

}