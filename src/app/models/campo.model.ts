import { IDDocument } from './iddocument.model';
import { TipoCampo, StrutturaCampo } from '../models/valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';
import { CampoSport } from './camposport.model';



export class Campo extends IDDocument {
    
  IDAREAOPERATIVA: string;
  IDLOCATION: string;
  IDSPORT: string;
  DENOMINAZIONE: string;
  TIPOLOGIA: TipoCampo;
  DIMENSIONI: string;
  STRUTTURA: StrutturaCampo;
  CAMPOSPORT: CampoSport[]; 
  UTILIZZABILE: boolean; //Segnato come utilizzabile
  DURATAOREMINIMA: number; //Se presente è la durata minima di prenotazione

  constructor() {
    super();
  }

      /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDSPORT',
                    'DENOMINAZIONE',
                    'DIMENSIONI'
                    ];
    let arNumber = ['TIPOLOGIA', 'STRUTTURA'];
    let arNumberDecimal = ['DURATAOREMINIMA'];
    let arBoolean = ['UTILIZZABILE'];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['CAMPOSPORT'];

    objDescriptor.className = 'CAMPO';
    objDescriptor.doRemote = true;

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
}

// Sovrascrivo il metodo IDDocument
setJSONProperty(data: any) {
  //Chiamo il metodo IDDocument
  super.setJSONProperty(data);

  //Chiamo il metodo per le collection
  this.setCollection(data);
}

/**
 * Imposta le collection dell'oggetto, con i reali oggetti tipizzati
 * @param data JSON Received
 */
setCollection(data: any) {
  
  // Riazzero e ricreo
  this.CAMPOSPORT = [];

  //Sistemazione Immagini Location
  if (data.CAMPOSPORT) {
    this.setCollectionCampoSport(data);
  }

}

/**
 * Inizializza la collection Apertura Location con oggetto tipizzati
 * @param data JSON Received
 */
private setCollectionCampoSport(data: any) {
  if (data.CAMPOSPORT) {


    data.CAMPOSPORT.forEach(elCampoSport => {
      let newCampoSport = new CampoSport();
      newCampoSport.setJSONProperty(elCampoSport);

      this.CAMPOSPORT.push(newCampoSport);
    });
  }
}

 

//Aggiunge alla collection un campo Sport
addCampoSport(docCampoSport: CampoSport) {
  if (!this.CAMPOSPORT) {
    this.CAMPOSPORT = [];
  }

  this.CAMPOSPORT.push(docCampoSport);
}


}