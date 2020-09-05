import { IDDocument } from '../library/models/iddocument.model';
import { SettoreAttivita } from './valuelist.model';
import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { Time } from '@angular/common';

export class OccupazioneCampi extends IDDocument {

    IDREF: string;
    TIPO: SettoreAttivita;
    IDAREA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    DATAINIZIO: Date;
    DATAFINE: Date;
    ORAINIZIO: Date;
    ORAFINE: Date;

    //a Seconda di TIPO cambiano le logiche di ID e IDREF
    //Tipo = SettoreAttivita.Corso -> ID = IDPianificazioneCorso IDREF = IDCorso 
    //Tipo = SettoreAttivita.Prenotazione -> ID = IDPianificazionePrenotazione e IDREF = IDPrenotazione
    
    constructor(onlyInstance?:boolean) {
      
        super(onlyInstance);
        
    }
  
  
     /**
      * Ritorna il descrittore della Struttura Campi
     */
     getDescriptor(): Descriptor {
      let objDescriptor = new Descriptor();
      let arString = ['IDAREA',
                      'IDREF',
                      'IDLOCATION',
                      'IDCAMPO'
                      ];
      let arNumber = ['TIPO'];
      let arBoolean = [];
      let arDate = ['DATAINIZIO','DATAFINE'];
      let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
      let arTime = ['ORAINIZIO','ORAFINE'];
      let arCollection = [];
  
      objDescriptor.className = 'OccupazioneCampi';
      objDescriptor.doRemote = true;
      objDescriptor.classWebApiName = 'OCCUPAZIONECAMPI';
      objDescriptor.describeField = '';
  
      objDescriptor.addMultiple(arString, TypeDefinition.char);
      objDescriptor.addMultiple(arNumber, TypeDefinition.number);
      objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
      objDescriptor.addMultiple(arDate, TypeDefinition.date);
      objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
      objDescriptor.addMultiple(arTime, TypeDefinition.time);
      objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
  
      objDescriptor.setRelation('IDAREA','Area');
      objDescriptor.setRelation('IDLOCATION','Location');
      objDescriptor.setRelation('IDCAMPO','Campo');
      
      return objDescriptor;
  }


}