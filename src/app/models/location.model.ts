import { IDDocument } from './iddocument.model';
import { LocationImage } from './locaton-image.model';
import { Campo } from './campo.model';
import { AperturaLocation } from './aperturalocation.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';
import { CampoSport } from './camposport.model';

export class Location extends IDDocument {

    IDAREAOPERATIVA: string;
    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    IMAGEURL: string;
    FAVORITE: boolean;
    CANBOOK: boolean;
    DESCRIZIONEMOB: string;
    TELEFONO: string;
    EMAIL: string;
    LOCATIONIMAGE: LocationImage[];
    CAMPO: Campo[];
    APERTURALOCATION: AperturaLocation[];
    
  
    constructor() {
      
      super();
      
      this.LOCATIONIMAGE = [];
      this.CAMPO = [];
      this.APERTURALOCATION = [];

      // Imposto una cover standard
      this.setStandardCover();
      
    }


            /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDAREAOPERATIVA',
                    'DENOMINAZIONE',
                    'INDIRIZZO',
                    'CAP',
                    'COMUNE',
                    'PROVINCIA',
                    'ISOSTATO',
                    'IMAGEURL',
                    'DESCRIZIONEMOB',
                    'TELEFONO',
                    'EMAIL'
                    ];
    let arNumber = [];
    let arBoolean = ['FAVORITE','CANBOOK'];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['LOCATIONIMAGE','CAMPO','APERTURALOCATION'];

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
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
     * Imposta una coverImage standard, eliminando le presenti
     */
    setStandardCover() {

      this.LOCATIONIMAGE = [];
      let standardImage = 'assets/img/sport2_mini.png';
      
      //Immagine Cover nell'oggetto
      this.IMAGEURL = standardImage;

      //Creo una immagine standard
      let newImage = new LocationImage;
      newImage.COVERIMAGE = true;
      newImage.IMAGEURL = standardImage;

      //Impostazione nell'Array
      this.LOCATIONIMAGE.push(newImage);

    }

    /** Ritorna il percorso da applicare al tag image */
    getUrlImage() {
      let returnImage = '';
      if (this.IMAGEURL) {
        returnImage = this.IMAGEURL;
      }
      else {
        returnImage = 'assets/img/sport2_mini.png';
      }

      return returnImage;
    }

    /** Ritorna il numero di campi presenti nella Location */
    getNumCampi() {
      let numCampi = 0;
      if (this.CAMPO) {
        numCampi = this.CAMPO.length;
      }

      return numCampi;
    }

    /** Ritorna una copia dell'Array senza l'immagine di Cover */
    imageGallery() {
      return [...this.LOCATIONIMAGE.filter(element => {
        return !element.COVERIMAGE;
      })];
    }




    //#region COLLECTION SETTING

    /**
     * Imposta le collection dell'oggetto, con i reali oggetti tipizzati
     * @param data JSON Received
     */
    setCollection(data: any) {
      
      // Riazzero e ricreo le aperture
      this.APERTURALOCATION = [];

      //Sistemazione Immagini Location
      if (data.LOCATIONIMAGE) {
        this.setCollectionLocationImage(data);
      }

      //Sistemazione Aperture Location
      if (data.APERTURALOCATION) {
        this.setCollectionAperturaLocation(data);
      }

      //Sistenazione Campo
      if (data.CAMPO) {
        this.setCollectionCampo(data);
      }
    }


    /**
     * Inizializza la collection CAMPO con i dati ricevuti tipizzando gli oggetti
     * @param data JSON Received
     */
    private setCollectionCampo(data: any) {

      if (data.CAMPO) {

        //Imposto gli elementi CAMPO in stato da eliminare
        //Utilizzando l'oggetto IDCollection
        IDDocument.setAllDeleting(this.CAMPO);

        // Ciclo sugli elementi arrivati
        data.CAMPO.forEach(elCampo => {
          // Cerco eventualmente il campo
          let docCampo = this.getCampoByID(elCampo.ID);
          
          //Campo non trovato
          if (!docCampo) {
            docCampo = new Campo();
            docCampo.setJSONProperty(elCampo);
            this.CAMPO.push(docCampo);
          }
          else {
            //Campo Trovato
            docCampo.setJSONProperty(elCampo);
            docCampo.do_deleted = false;
          }
        });

        //Rimozione di tutti gli elementi non cancellati
        this.CAMPO = this.CAMPO.filter(element => {
          return !element.do_deleted
        });

      }
    }

    /**
     * Inizializza la collection Apertura Location con oggetto tipizzati
     * @param data JSON Received
     */
    private setCollectionAperturaLocation(data: any) {
      if (data.APERTURALOCATION) {


        data.APERTURALOCATION.forEach(elApertura => {
          let newDay = new AperturaLocation();
          newDay.setJSONProperty(elApertura);

          this.APERTURALOCATION.push(newDay);
        });
      }
    }

    /**
     * Imposta la collection delle LocationImage
     * @param data JSON Received
     */
    private setCollectionLocationImage(data: any) {
      if (data.LOCATIONIMAGE) {
        if (data.LOCATIONIMAGE.length !== 0) {
          
          //Svuoto l'array
          this.LOCATIONIMAGE = [];

          //Ciclo sulle Location Image arrivate
          data.LOCATIONIMAGE.forEach(elImage => {
            let newImage = new LocationImage();
            newImage.setJSONProperty(elImage);
            this.LOCATIONIMAGE.push(newImage);

            // Se fosse l'immagine di Cover la imposto nell'oggetto
            if (newImage.COVERIMAGE) {
              this.IMAGEURL = newImage.IMAGEURL;
            }
          });

        }
      }
    }

    //#endregion

    getCampoByID(id: string): Campo {
      return this.CAMPO.find(element => {
        return element.ID == id;
      })
    }


    /**
     * Cicla su tutti i CAMPI presenti ed elimina 
     * le informazioni CAMPOSPORT
     */
    emptyCampiSport() {

      this.CAMPO.forEach(elCampo => {
        elCampo.CAMPOSPORT = [];
      })
    }


    /**
     * 
     * @param docCampoSport Campo Sport da aggiungere
     * @param idCampo IDCampo da prelevare
     */
    addCampoSport(docCampoSport: CampoSport, idCampo: string) {
      this.CAMPO.forEach(elCampo => {
        if (elCampo.ID == idCampo) {
          elCampo.addCampoSport(docCampoSport);
        }
      })
    }

    

}