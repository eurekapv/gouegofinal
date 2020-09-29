import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { RequestForeign } from '../library/models/requestParams.model';

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



    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDCORSO',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO'
                    ];
    let arNumber = ['VALUEGIORNO','ORELEZIONE'];
    let arBoolean = ['MULTIPLA'];
    let arDate = ['DATA'];
    let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
    let arTime = ['ORAINIZIO'];
    let arCollection = [];

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
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
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
       * Ritorna TRUE, FALSE a seconda se l'evento è passato o no
       */
      eventoPassato() {
        return (new Date() > this.DATAORAFINE );
      }
}