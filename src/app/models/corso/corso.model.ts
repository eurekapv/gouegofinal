import { IDDocument } from '../../library/models/iddocument.model';
import {  TipoCorso, StatoCorso, TargetSesso, Language, Giorni, ModalitaFruizione, Tempistica, ModalitaIscrizione } from '../zsupport/valuelist.model';
import { Settimana } from '../zsupport/settimana.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';
import { CorsoProgramma } from './corsoprogramma.model';
import { PianificazioneCorso } from './pianificazionecorso.model';
import { MyDateTime } from '../../library/models/mydatetime.model';

export class Corso extends IDDocument {

    DENOMINAZIONE: string;
    SIGLACALENDARIO: string;
    TIPO: TipoCorso;
    IDLIVELLOENTRATA: string;
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
    _SETTIMANA: Settimana[]; //Giorni della Settimana del Corso
    DURATA: number;
    CORSOPROGRAMMA: CorsoProgramma[];
    PIANIFICAZIONECORSO: PianificazioneCorso[];
    MODFRUIZIONE: ModalitaFruizione;
    STATODINAMICO: StatoCorso;
    PREZZOLORDO: number;
    MODALITAISCRIZIONE: ModalitaIscrizione;
    
    

    constructor(onlyInstance?:boolean) {
      super(onlyInstance);

      if (!onlyInstance) {
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
                    'IDLIVELLOFINALE',
                    'IDSPORT',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'GIORNIPREVISTI',
                    'IDCATEGORIEETA',
                    '_DESCRSPORT'
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
     * Ritorna il numero di giornate settimanali previste
     */
    getNumeroGiornateSettimanali(): number {
      let count = 0;

      if (this.GIORNIPREVISTI && this.GIORNIPREVISTI.length != 0) {
        count = this.GIORNIPREVISTI.split(';').length;
      }
      
      return count;
    }

    /**
     * Ritorna una etichetta HTML a specificare il numero giornate alla settimana
     */
    getLabelNumeroGiornateSettimanali(): string {
      let numGiorni = this.getNumeroGiornateSettimanali();
      let labelHtml = '';
      let myClassText = 'ion-text-bold'
      let labelTipo = '';

      switch (this.TIPO) {
        case TipoCorso.corso:
            labelTipo = 'Il corso'
          break;

        case TipoCorso.prova:
            labelTipo = 'La prova'
          break;
      
        default:
          break;
      }

      if (numGiorni == 1) {
        labelHtml = `${labelTipo} si svolge <ion-text class="${myClassText}">1 SOLO GIORNO</ion-text> alla settimana`
      }
      else if (numGiorni == 2) {
        labelHtml = `${labelTipo} &egrave; <ion-text class="${myClassText}">BISETTIMANALE</ion-text>; si svolge 2 giorni a settimana`
      }
      else if (numGiorni != 0) {
        labelHtml = `${labelTipo} si svolge <ion-text class="${myClassText}">${numGiorni} GIORNI</ion-text> alla settimana`
      }

      return labelHtml;

    }

    /**
     * Serve per capire la situazione temporale del corso rispetto ad oggi
     * FUTURO -> Inizia il DATAINIZIO
     * IN_CORSO -> Termina il DATAFINE
     * PASSATO -> Concluso il DATAFINE + 1
     */
    tempoCorso():Tempistica {
      let adesso = new Date();
      let value:Tempistica = Tempistica.PASSATO;
      let dataOraInizioCorso: Date;
      let dataOraFineCorso: Date;

      dataOraInizioCorso = MyDateTime.mergeDateAndTime(this.DATAINIZIO, this.ORAINIZIO);
      dataOraFineCorso = MyDateTime.mergeDateAndTime(this.DATAFINE, this.ORAINIZIO);

      
      if (dataOraInizioCorso > adesso) {
        value = Tempistica.FUTURO;
      }
      else if (dataOraFineCorso > adesso) {
        value = Tempistica.IN_CORSO;
      }
      else {
        value = Tempistica.PASSATO;
      }

      return value;
    }

    /**
     * Serve per capire la situazione temporale delle iscrizioni rispetto ad oggi
     * FUTURO -> Aprono il DATAINIZIO
     * IN_CORSO -> Entro il DATAFINE
     * PASSATO -> Sono concluse il DATAFINE
     */    
    tempoIscrizioni():Tempistica {
      let adesso = new Date();
      let value:Tempistica = Tempistica.PASSATO;
      let dataInizioIscrizioni: Date;
      let dataFineIscrizioni: Date;

      if (!this.ISCRIZIONEDAL && !this.ISCRIZIONEAL) {
        //Non ho date di iscrizioni
        value = Tempistica.PASSATO;
      }
      else {
        if (!this.ISCRIZIONEDAL) {
          dataInizioIscrizioni = new Date(2000,1,1);
        }
        else {
          dataInizioIscrizioni = this.ISCRIZIONEDAL
        }

        if (!this.ISCRIZIONEAL) {
          dataFineIscrizioni = new Date(2050,1,1);
        }
        else {
          dataFineIscrizioni = this.ISCRIZIONEAL
        }

        if (dataInizioIscrizioni > adesso) {
          value = Tempistica.FUTURO;
        }
        else if (dataFineIscrizioni > adesso) {
          value = Tempistica.IN_CORSO;
        }
        else {
          value = Tempistica.PASSATO;
        }

      }

      return value;
    }    

    /**
     * Ritorna TRUE se Oggi è possibile iscriversi al corso
     */
    flagIscrizioniAperte(): boolean {
      let flag: boolean = false;

      if (this.tempoIscrizioni() == Tempistica.IN_CORSO) {
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
                txtReturn += '<br/>';
              }
              txtReturn += element.TESTOHTML;
            }
            
          }
        }
      }

      return txtReturn;
    }

}