import { IDDocument } from '../library/models/iddocument.model';
import { TipoSocieta, TipoVerificaAccount } from '../models/valuelist.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PrivateImage } from './privateimage.model';




export class Gruppo extends IDDocument {

    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    CODICEFISCALE: string;
    PARTITAIVA: string;
    APPID: string;
    TIPOGRUPPO: TipoSocieta;
    URLPRIVACY: string;
    PRIVATEIMAGE: PrivateImage[];
    APPFLAGREGISTRAZIONE: boolean;
    APPTIPOVERIFICA: TipoVerificaAccount;
    FLAGAPPSHOPONLINE: boolean;
    
  
    constructor(onlyInstance?:boolean) {
      super(onlyInstance);
      
      this.PRIVATEIMAGE = [];

    }


    /**
     * Imposta le proprietà del documento
     * @param data JSON Ricevuto
     */
    setJSONProperty(data: any) {
      super.setJSONProperty(data);
      
      //Imposto le collection
      this.setCollection(data);

      //Imposto che il documento è originale
      this.setOriginal();
    }

    /**
     * Imposto le collection del doumento
     * @param data JSON Ricevuto 
     */
    setCollection(data: any) {
      this.PRIVATEIMAGE = [];

      /** Ho delle immagini */
      if (data.PRIVATEIMAGE) {
        this.setCollectionprivateImage(data);
      }
    }

    /**
     * Collection PRIVATEIMAGE
     * @param data JSON Ricevuto
     */
    setCollectionprivateImage(data: any) {
      data.PRIVATEIMAGE.forEach(element => {

        let newPrivateImage = new PrivateImage();
        newPrivateImage.setJSONProperty(element);
        this.PRIVATEIMAGE.push(newPrivateImage);
      });

    }

        /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DENOMINAZIONE',
                    'INDIRIZZO',
                    'CAP',
                    'COMUNE',
                    'PROVINCIA',
                    'ISOSTATO',
                    'CODICEFISCALE',
                    'PARTITAIVA',
                    'APPID',
                    'URLPRIVACY'                   
                    ];
    let arNumber = ['TIPOGRUPPO','APPTIPOVERIFICA'];
    let arBoolean = ['APPFLAGREGISTRAZIONE','FLAGAPPSHOPONLINE'];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['PRIVATEIMAGE'];

    objDescriptor.className = 'Gruppo';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'GRUPPOSPORTIVO';
    objDescriptor.describeField = 'DENOMINAZIONE';
    
    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
  }

}

