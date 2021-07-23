import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { IDDocument } from "../library/models/iddocument.model";
import { CorsoValutazioneLivello } from "./corsovalutazionelivello.model";

export class CorsoValutazione extends IDDocument {
    IDCORSO:                string;
    FLAGBOZZA:              boolean;
    DATAORAVALUTAZIONE:     Date;
    TESTOVALUTAZIONE:       string;
    VOTAZIONEFINALE:        number;
    IDUTENTE:               string;
    NOMINATIVO:             string;

    CORSOVALUTAZIONELIVELLO: CorsoValutazioneLivello[];

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDCORSO',
            'TESTOVALUTAZIONE',
            'IDUTENTE',
            'NOMINATIVO'
        ];
        let arNumber = ['VOTAZIONEFINALE'];
        let arBoolean = ['FLAGBOZZA'];
        let arDate = ['DATAORAVALUTAZIONE'];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'CorsoValutazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOVALUTAZIONE';
        objDescriptor.describeField  = 'NOMINATIVO';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
       
        
        return objDescriptor;
    }

    constructor(onlyInstance?: boolean){
        super(onlyInstance);

        this.DATAORAVALUTAZIONE = new Date();
        this.TESTOVALUTAZIONE = '';
        this.CORSOVALUTAZIONELIVELLO = [];
    }
    
    

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

        this.CORSOVALUTAZIONELIVELLO = [];
        
        if (data.CORSOVALUTAZIONELIVELLO) {

          this.setCollectionCorsoValutazioneLivello(data.CORSOVALUTAZIONELIVELLO);
        }
  
        
      }
  
      /**
       * Imposta la collection CORSOVALUTAZIONELIVELLO coni dati ricevuti
       * @param arValutazioni JSON Ricevuti
       */
       setCollectionCorsoValutazioneLivello(arValutazioni: any[]) {
  
        this.CORSOVALUTAZIONELIVELLO = [];
  
        if (arValutazioni) {

          arValutazioni.forEach(element => {
            
            // Ricerco se esiste già
            let newValutazione = this.getCorsoValutazioneLivelloByID(element.ID);
  
            //Non esiste lo creo nuovo
            if (!newValutazione) {
  
              newValutazione = new CorsoValutazioneLivello();
              //Imposto i dati
              newValutazione.setJSONProperty(element);
              //Aggiungo alla collection
              this.CORSOVALUTAZIONELIVELLO.push(newValutazione);
  
            }
            else {
              //Reimposto i valori
              newValutazione.setJSONProperty(element);
            }
  
  
          })
        }
      }   
    
/**
 * Ritorna l'elemento di Corso Valutazione Livello che corrisponde con ID
 */
getCorsoValutazioneLivelloByID(idCorsoValutazioneLivello): CorsoValutazioneLivello {

    // Ricerco se esiste già
    let findRecord = this.CORSOVALUTAZIONELIVELLO.find(elvalutazioneLivello => {
            return elvalutazioneLivello.ID == idCorsoValutazioneLivello
    });

    return findRecord;
}      
}