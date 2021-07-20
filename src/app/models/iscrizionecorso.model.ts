import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { IDDocument } from "../library/models/iddocument.model";
import { IscrizioneIncasso } from "./iscrizioneincasso.model";
import { Sesso, StatoIscrizione, TipoPrezzo } from "./valuelist.model";

export class IscrizioneCorso extends IDDocument {

    IDCORSO:               string; //
    IDUTENTE:              string; //
    DATAISCRIZIONE:        Date;
    ANNOISCRIZIONE:        number;
    NOMINATIVO:            string;
    EMAIL:                 string;
    MOBILENUMBER:          string;
    NOTES:                 string;
    IDSPORT:               string;
    IDAREAOPERATIVA:       string; //
    IDLOCATION:            string; //
    IDCAMPO:               string;
    DATAINIZIO:            Date;
    CODICEALFA:            string;
    CODICEINT:             number;
    NATOIL:                Date;
    SESSO:                 Sesso;
    DATAFINEISCRIZIONE:    Date;    
    STATOISCRIZIONE:       StatoIscrizione;
    IDTIPOPAGAMENTO:       string;
    
    TIPOPREZZO:            TipoPrezzo;
    IMPORTO:               number;
    IDCODICEIMPOSTA:       string;
    IDVALUTA:              string;
    IMPOSTA:               number;
    TOTALE:                number;
    RESIDUO:               number;
    INCASSATO:             number;


    ISCRIZIONEINCASSO:     IscrizioneIncasso[];


    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        this.ISCRIZIONEINCASSO = [];
  
    } 
      
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDCORSO',
                        'IDUTENTE',
                        'NOMINATIVO',
                        'EMAIL',
                        'MOBILENUMBER',
                        'NOTES',
                        'IDSPORT',
                        'IDAREAOPERATIVA',
                        'IDLOCATION',
                        'IDCAMPO',
                        'CODICEALFA',
                        'IDTIPOPAGAMENTO',
                        'IDCODICEIMPOSTA',
                        'IDVALUTA'
                        ];
        let arNumber = ['ANNOISCRIZIONE',
                        'CODICEINT',
                        'SESSO',
                        'STATOISCRIZIONE',
                        'TIPOPREZZO'
                       ];
        let arDecimal = ['IMPORTO',
                        'IMPOSTA',
                        'TOTALE',
                        'RESIDUO',
                        'INCASSATO'];
        let arBoolean = [];
        let arDate = ['DATAISCRIZIONE','DATAFINEISCRIZIONE','DATAINIZIO'];
        let arDateTime =[];
        let arTime = [];
    
        objDescriptor.className = 'IscrizioneCorso';
        objDescriptor.classWebApiName = 'ISCRIZIONECORSO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DENOMINAZIONE';
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
    
        objDescriptor.addCollection('ISCRIZIONEINCASSO','IscrizioneIncasso','IDISCRIZIONECORSO');
        
    
    
        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDLOCATION','Location');
        objDescriptor.setRelation('IDCAMPO','Campo');
   
    
        
    
        return objDescriptor;
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
        this.ISCRIZIONEINCASSO = [];
  
        if (data.ISCRIZIONIINCASSI) {
          this.setCollectionIscrizioniIncassi(data.ISCRIZIONIINCASSI);
        }
  

        
      }   
      
    /**
     * Imposta la collection ISCRIZIONIINCASSI
     * @param arIncassi JSON Ricevuti
     */
    setCollectionIscrizioniIncassi(arIncassi: any[]) {

        this.ISCRIZIONEINCASSO = [];
  
        if (arIncassi) {

          arIncassi.forEach(element => {
            
            //Ricerco se esiste già
            let newIscrizioneIncasso = this.getIncassoByID(element.ID);
  
            //Non esiste lo creo nuovo
            if (!newIscrizioneIncasso) {
  
              newIscrizioneIncasso = new IscrizioneIncasso();
              newIscrizioneIncasso.setJSONProperty(element);
              this.ISCRIZIONEINCASSO.push(newIscrizioneIncasso);
  
            }
            else {
              //Reimposto i valori
              newIscrizioneIncasso.setJSONProperty(element);
            }
  
  
          })
        }
      }    
      
      
    /**
     * Ritorna l'elemento di IscrizioneIncasso che corrisponde con ID
     */
     getIncassoByID(idIscrizioneIncasso: string): IscrizioneIncasso {

        //Ricerco l'elemento richiesto
        let existIscrizioneIncasso = this.ISCRIZIONEINCASSO.find(elIscrizioneIncasso => {
          return elIscrizioneIncasso.ID == idIscrizioneIncasso
        });


        return existIscrizioneIncasso;
    }      
}