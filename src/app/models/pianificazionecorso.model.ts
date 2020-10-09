import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { RequestForeign } from '../library/models/requestParams.model';
import { CorsoPresenze } from './corsopresenze.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { TypePeriod } from '../library/models/mydatetime.model';


export class PianificazioneCorso extends IDDocument {
    IDCORSO: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    DATA: Date;
    VALUEGIORNO: number;
    ORAINIZIO: Date;
    ORELEZIONE: number;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    MULTIPLA: boolean;
    CORSOPRESENZE: CorsoPresenze[];
    NOTEADMIN: string;
    NOTETRAINER: string;


    constructor(
      onlyInstance?:boolean
    ){
        super(onlyInstance);

        this.CORSOPRESENZE = [];
    }

    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data: any) {

      //Chiamo IDDOcument
      super.setJSONProperty(data);  
      
      //Imposto la collection
      this.setCollection(data);

      //Imposto che il documento è originale
      this.setOriginal();

    }

    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data: any) {
      this.CORSOPRESENZE = [];

      if (data.CORSOPRESENZE) {
        this.setCollectionCorsoPresenze(data.CORSOPRESENZE);
      }
      
    }    

    /**
     * Imposta la collection CorsoPresenze
     * @param arPresenze JSON Ricevuti
     */
    setCollectionCorsoPresenze(arPresenze: any[]) {

      this.CORSOPRESENZE = [];

      if (arPresenze) {

        arPresenze.forEach(element => {
            // Ricerco se esiste già
            let newProgramma = new CorsoPresenze();
            newProgramma.setJSONProperty(element);
            this.CORSOPRESENZE.push(newProgramma);
        });
      }
    }    

    

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDCORSO',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'NOTEADMIN',
                    'NOTETRAINER'
                    ];
    let arNumber = ['VALUEGIORNO','ORELEZIONE'];
    let arBoolean = ['MULTIPLA'];
    let arDate = ['DATA'];
    let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
    let arTime = ['ORAINIZIO'];
    

    objDescriptor.className = 'PianificazioneCorso';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'PIANIFICAZIONECORSO';
    objDescriptor.describeField = 'DATA';

    
    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addCollection('CORSOPRESENZE', 'CorsoPresenze', 'IDPIANIFICAZIONECORSO');
    
    objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    objDescriptor.setRelation('IDLOCATION','Location');
    objDescriptor.setRelation('IDCORSO','Corso');
    objDescriptor.setRelation('IDCAMPO','Campo');


    return objDescriptor;
}    


static getReqForeignKeys(): RequestForeign[] {
  let arRequest: RequestForeign[] = [];
  let objForeign: RequestForeign;

  objForeign = new RequestForeign('IDAREAOPERATIVA');
  arRequest.push(objForeign);

  objForeign = new RequestForeign('IDSPORT');
  arRequest.push(objForeign);

  objForeign = new RequestForeign('IDCAMPO');
  arRequest.push(objForeign);

  objForeign = new RequestForeign('IDLOCATION');
  objForeign.addDescribeField('DENOMINAZIONE');
  objForeign.addDescribeField('INDIRIZZO');
  objForeign.addDescribeField('COMUNE');
  objForeign.addDescribeField('EMAIL');

  arRequest.push(objForeign);

  return arRequest;
}

   
  
  /**
   * Ritorna TRUE, FALSE a seconda se 
   * l'evento è passato o no
   */
  eventoPassato() {

    return (new Date() > this.DATAORAFINE );
  }

  canUpdatePresenze(gapOre: number): boolean{
    let canUpdate: boolean = true;
    let now = new Date;

    if (now < this.DATAORAINIZIO){
      canUpdate = false;
    }

    if (now > MyDateTime.calcola(this.DATAORAFINE, gapOre, TypePeriod.hours)){
      canUpdate = false;
    }

    return canUpdate;
  }

  msgCanUpdatePresenze(gapOre: number): string{

    let strReturn = '';
    let now = new Date;

    // in questo momento possiamo aggiornare
    if (this.canUpdatePresenze(gapOre)){


      //recupero la data entro cui è possibile aggiornare
      let scadenza = MyDateTime.calcola(this.DATAORAFINE, gapOre, TypePeriod.hours);
      //la converto in stringa
      let strScadenza =MyDateTime.formatDate(scadenza, 'DD/MM/YY');

      strReturn = 'Presenze aggiornabili fino al ' + strScadenza;
    }

    //in questo momento non possiamo aggiornare
    else{

      //E' troppo presto
      if (now < this.DATAORAINIZIO){
        strReturn = 'Non è ancora possibile modificare le presenze di questa lezione';
      }
  
      if (now > MyDateTime.calcola(this.DATAORAFINE, gapOre, TypePeriod.hours)){
        strReturn = 'Non è più possibile modificare le presenze di questa lezione';
      }
    }

    return strReturn;
  }


}