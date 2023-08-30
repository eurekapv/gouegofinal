import { IDDocument } from "../library/models/iddocument.model";
import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { RequestForeign } from "../library/models/requestParams.model";
import { EventoPrivacy, EventoStato, EventoVisibilita, TargetSesso, Tempistica } from "./valuelist.model";
import { MyDateTime } from "../library/models/mydatetime.model";
import { EventoPianificazione } from "./evento-pianificazione.model";

export class Evento extends IDDocument {
    IDAREAOPERATIVA: string;
    IDSPORT: string;
    IDTIPOEVENTO: string;
    SIGLACALENDARIO: string;
    DENOMINAZIONE: string;
    DATAINIZIO: Date;
    DATAFINE: Date;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    ORAINIZIO: Date;
    ORAFINE: Date;
    PROGRAMMA: string;
    STATO: EventoStato;
    STATOPRIVACY: EventoPrivacy;
    STATOVISIBILITA: EventoVisibilita;
    TARGETSESSO: TargetSesso;
    IDCATEGORIAETA: string;
    MINPARTECIPANTI: number;
    MAXPARTECIPANTI: number;
    PREZZOLORDO: number;
    ISCRIZIONEDAL: Date;
    ISCRIZIONEAL: Date;
    EVENTOPIANIFICAZIONE: EventoPianificazione[];
       

    //TODO: In errore il recupero della collection dagli eventi

    constructor(onlyInstance?: boolean){
        super(onlyInstance);

        this.EVENTOPIANIFICAZIONE = [];
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA','IDSPORT','IDTIPOEVENTO','IDCATEGORIAETA','DENOMINAZIONE','PROGRAMMA'];
        let arNumber = ['STATO','STATOPRIVACY','STATOVISIBILITA','TARGETSESSO','MINPARTECIPANTI','MAXPARTECIPANTI','PREZZOLORDO'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO','DATAFINE'];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE','ISCRIZIONEDAL','ISCRIZIONEAL'];
        let arTime = ['ORAINIZIO','ORAFINE'];
        
    
        objDescriptor.className = 'Evento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'EVENTO';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.addCollection('EVENTOPIANIFICAZIONE','EventoPianificazione','IDEVENTO');

        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDTIPOEVENTO','TipoEvento');
        objDescriptor.setRelation('IDCATEGORIAETA','CategoriaEta');
        
                            
        return objDescriptor;
    }


    /**
     * Per richiedere la decodifica dei campi dell'evento
     * utilizzare questo array di ForeignKey
     * @returns 
     */
    static getReqForeignKeys(): RequestForeign[] {
        let arRequest: RequestForeign[] = [];
        let objForeign: RequestForeign;
    
        objForeign = new RequestForeign('IDAREAOPERATIVA');
        arRequest.push(objForeign);
    
        objForeign = new RequestForeign('IDSPORT');
        arRequest.push(objForeign);
    
        objForeign = new RequestForeign('IDTIPOEVENTO');
        arRequest.push(objForeign);

        objForeign = new RequestForeign('IDCATEGORIAETA');
        arRequest.push(objForeign);        
        
    
        return arRequest;
    }

    //#region SETTER OGGETTO
    
    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
      //Chiamo IDDOcument
      super.setJSONProperty(data);

      this.setCollection(data);

      this.setOriginal();

    }

    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data: any) {
      
      //E' presente una collection di Eventi Pianificazione
      if (data.EVENTOPIANIFICAZIONE) {
        
        this.EVENTOPIANIFICAZIONE = [];

       let myCollection = data.EVENTOPIANIFICAZIONE;

        myCollection.forEach(elItem => {
          let myDoc: EventoPianificazione;
          myDoc = new EventoPianificazione();
          myDoc.setJSONProperty(elItem);
          this.EVENTOPIANIFICAZIONE.push(myDoc);
        })

      }
      
    }    
    //#endregion

    /**
     * Serve per capire la situazione temporale dell'evento rispetto ad oggi
     * FUTURO -> Inizia il DATAINIZIO
     * IN_CORSO -> Termina il DATAFINE
     * PASSATO -> Concluso il DATAFINE
     */
    tempoEvento():Tempistica {
        
        let flagTemporale:Tempistica;

        flagTemporale = MyDateTime.tempoMomento(this.DATAORAINIZIO, this.DATAORAFINE);

        return flagTemporale;
      }   
      

    /**
     * Serve per capire la situazione temporale delle iscrizioni rispetto ad oggi
     * FUTURO -> Aprono il DATAINIZIO
     * IN_CORSO -> Entro il DATAFINE
     * PASSATO -> Sono concluse il DATAFINE
     */    
    tempoIscrizioni():Tempistica {

        let flagTemporale:Tempistica;

        flagTemporale = MyDateTime.tempoMomento(this.ISCRIZIONEDAL, this.ISCRIZIONEAL);
  
        return flagTemporale;
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
}
