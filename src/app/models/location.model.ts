import { IDDocument } from '../library/models/iddocument.model';
import { LocationImage } from './locaton-image.model';
import { Campo } from './campo.model';
import { AperturaLocation } from './aperturalocation.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { CampoSport } from './camposport.model';
import { OccupazioneCampi } from './occupazionecampi.model';
import { TipoSocieta } from './valuelist.model';

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
    DESCRIZIONEMOB: string;
    TELEFONO: string;
    EMAIL: string;
    ENABLEPRENOTAZIONI: boolean;
    MINUTISLOTPRENOTAZIONE: number;
    MINUTIPREAVVISOPRENOTAZIONE: number;
    ENABLEDELETEPRENOTAZIONI: boolean;
    MINUTIPREAVVISODELETEPRENOTAZIONE: number;    
    APPVISIBILITY: number;
    IDAZIENDACLIENTE: string;
    LOCATIONIMAGE: LocationImage[];
    CAMPO: Campo[];
    APERTURALOCATION: AperturaLocation[];
    _LISTOCCUPAZIONI:OccupazioneCampi[] = [];
    
  
    constructor(onlyInstance?:boolean) {
      
      super(onlyInstance);
      
      this.LOCATIONIMAGE = [];
      this.CAMPO = [];
      this.APERTURALOCATION = [];
      
      if (!onlyInstance) { 

        this.ENABLEPRENOTAZIONI = false;
        this.MINUTISLOTPRENOTAZIONE = 30;
        this.MINUTIPREAVVISOPRENOTAZIONE = 0;
        // Imposto una cover standard
        this.setStandardCover();

      }
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
                    'EMAIL',
                    'IDAZIENDACLIENTE'
                    ];
    let arNumber = ['MINUTISLOTPRENOTAZIONE','MINUTIPREAVVISOPRENOTAZIONE','APPVISIBILITY','MINUTIPREAVVISODELETEPRENOTAZIONE'];
    let arBoolean = ['FAVORITE','ENABLEPRENOTAZIONI','ENABLEDELETEPRENOTAZIONI'];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['LOCATIONIMAGE','CAMPO','APERTURALOCATION'];

    objDescriptor.className = 'Location';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'LOCATION';
    objDescriptor.describeField = 'DENOMINAZIONE';

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

    objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    
    return objDescriptor;
}

  

    // Sovrascrivo il metodo IDDocument
    setJSONProperty(data: any) {
      //Chiamo il metodo IDDocument
      super.setJSONProperty(data);

      //Chiamo il metodo per le collection
      this.setCollection(data);

      //Imposto che il documento è originale
      this.setOriginal();
    }


    /**
     * Imposta una coverImage standard, eliminando le presenti
     */
    setStandardCover() {

      this.LOCATIONIMAGE = [];
      let standardImage = 'assets/img/cardhome_ge.png';
      
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
    getUrlImage(tipoSocieta?: TipoSocieta) {
      let returnImage = '';
      if (this.IMAGEURL) {
        returnImage = this.IMAGEURL;
      }
      else {
        if (tipoSocieta) {
          switch (tipoSocieta) {
            case TipoSocieta.sportiva:
              returnImage = 'assets/img/cardhome_ss.png';    
              break;

            case TipoSocieta.formazione:
              returnImage = 'assets/img/cardhome_fo.png';    
              break;
          
            default:
              break;
          }
        }
        else {
          returnImage = 'assets/img/cardhome_ge.png';
        }
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

    /**
     * Ritorna l'oggetto Campo che nell'array risulta successivo a quello rappresentato da idCampo
     * Undefined se non ci sono elementi o elementi successivi a quello selezionato
     * @param idCampo IDCampo Attuale
     */
    getNextCampo(idCampo: string = '') {
      let myCampo: Campo;
      let isNext = false;

      if (this.CAMPO) {
        for (let index = 0; index < this.CAMPO.length; index++) {
          const elCampo = this.CAMPO[index];

          //Senza idCampo il primo che trovo va bene
          if (!idCampo) {
            myCampo = elCampo;
            break;
          }
          else if (isNext) {
            //Questo è quello che mi serve
            myCampo = elCampo;
            break;
          }
          else if (elCampo.ID == idCampo) {
            //Sarà il prossimo che devo usare
            isNext = true;
          }

        }

      }

      return myCampo;
    }

    /**
     * Ritorna un campo partendo dal suo Indice
     * @param indexZeroBase Indice del campo Zero Base
     */
    getCampoByIndex(indexZeroBase: number) {
      let myCampo: Campo;
      if (this.CAMPO)  {
        myCampo = this.CAMPO[indexZeroBase];
      }

      return myCampo;
    }


    /**
     * Ritorna l'indirizzo della Location nel formato
     * Indirizzo - Citta
     * @param shortVersion Versione ridotta con Indirizzo se presente, oppure Citta
     */
    getAddressLocation(shortVersion: boolean) {
      let value = '';
      if (shortVersion) {
        if (this.INDIRIZZO.length !== 0)  {
          value = this.INDIRIZZO;
        }
        else if (this.COMUNE.length !== 0) {
          value = this.COMUNE;
        }
      }
      else {
        if (this.INDIRIZZO.length !== 0)  {
          value = this.INDIRIZZO;
        }

        if (this.COMUNE.length !== 0) {
          if (value.length !== 0) {
            value += ' - ';
          }

          value += this.COMUNE;
        }

      }

      return value;
    }

    

    /**
     * Cerca nella collection dei campi, verificando se lo Sport passato come parametro, puo' essere
     * giocato e ritorna un Array dei Campi Consentiti
     * @param isSport 
     */
    getAvalaibleFields(idSport: string) {
      let arCampi = [];
      if (idSport) {
        if (this.CAMPO) {

            arCampi = this.CAMPO.filter( el => {
                let trovato =false;
                if (el.CAMPOSPORT) {

                  for (const iterator of el.CAMPOSPORT) {

                    if (iterator.IDSPORT == idSport) {
                      trovato=true;
                      break;
                    }

                  }

                }
              return trovato;
            });

        }
      }

      return arCampi;
    }

    

}