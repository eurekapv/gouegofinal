import { IDDocument } from '../../library/models/iddocument.model';
import { Location } from './location.model';
import { TipoArea, PageType, SettorePagamentiAttivita, FuturoPrenotazione, FuturoIscrizioneGiornaliere, CancellazioniIscrizioniGiornaliere, TrainerPresenzeSegreteria } from '../zsupport/valuelist.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';
import { AreaLink } from './arealink.model';
import { AreaPaymentSetting } from './areapaymentsetting.model';
import { Position } from '@capacitor/geolocation';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';


export class Area extends IDDocument {
    IDGRUPPOSPORTIVO: string;
    TIPO: TipoArea;
    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    CONDVENDITACORSI: string;
    CONDVENDPRENOTAZIONI: string;
    LOCATIONS: Location[];
    AREALINKS: AreaLink[];
    AREAPAYMENTSETTINGS: AreaPaymentSetting[];
    APPSHOW: boolean;
    APPPRENOTAZIONI: boolean; //Mostra i pulsanti per prenotare
    APPSHOWCORSIPERIODI: boolean; //Mostra i pulsanti per i corsi a periodo
    APPSHOWCORSIGIORNATA: boolean; //Mostra i pulsanti per i corsi a giornata
    APPISCRIZIONI: boolean;
    APPISCRIZIONIEVENTI: boolean;
    APPTRAINERPRESENZE: TrainerPresenzeSegreteria; //Flag che riflette GapOrePresenze
    APPGAPOREPRESENZE: number; //Indica per quanto tempo (ore) dal termine di una data di corso, il trainer può inserire/aggiornare le presenze
    APPSHOPONLINE: boolean; //Shop Online abilitato
    APPSHOPPACCHETTIORARI: boolean; //Shop Online con Pacchetti Orari
    APPPROFILEPACCHETTIORARI: boolean; //Mostra i pacchetti orari nel profilo utente
    APPFUTUROPRENOTAZIONIFLAG: FuturoPrenotazione;
    APPFUTUROPRENOTAZIONIMESI: number;
    APPFUTUROISCRIZIONIFLAG: FuturoIscrizioneGiornaliere;
    APPFUTUROISCRIZIONIMESI: number;
    APPDELETEISCRIZIONIFLAG: CancellazioniIscrizioniGiornaliere;
    APPDELETEISCRIZIONIORE: number;


    LATITUDINE: number;
    LONGITUDINE: number;


    constructor(onlyInstance?:boolean) {
      
      super(onlyInstance);

      this.AREALINKS=[];
      this.LOCATIONS = [];
      this.AREAPAYMENTSETTINGS=[];
      
      //0 indica che è sempre possibile aggiornare le presenze (dal server non arriva nulla)
      if (!onlyInstance){

        this.APPGAPOREPRESENZE = 0;
        this.APPISCRIZIONI = false;
        this.APPISCRIZIONIEVENTI = false;
        this.APPPRENOTAZIONI = false;
        this.APPSHOPPACCHETTIORARI = false;
        this.APPSHOWCORSIGIORNATA = false;
        this.APPSHOWCORSIPERIODI = false;
        
        this.APPFUTUROISCRIZIONIFLAG = FuturoIscrizioneGiornaliere.sempre;
        this.APPFUTUROPRENOTAZIONIFLAG = FuturoPrenotazione.sempre;
        this.APPDELETEISCRIZIONIFLAG = CancellazioniIscrizioniGiornaliere.mai;

      }

    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
      let objDescriptor = new Descriptor();
      let arString = ['IDGRUPPOSPORTIVO',
                      'DENOMINAZIONE',
                      'INDIRIZZO',
                      'CAP',
                      'COMUNE',
                      'PROVINCIA',
                      'ISOSTATO',
                      'CONDVENDITACORSI',
                      'CONDVENDPRENOTAZIONI'];
      let arNumber = ['TIPOAREA',
                      'APPGAPOREPRESENZE',
                      'LATITUDINE',
                      'LONGITUDINE',
                      'APPFUTUROPRENOTAZIONIFLAG',
                      'APPFUTUROPRENOTAZIONIMESI',
                      'APPFUTUROISCRIZIONIFLAG',
                      'APPFUTUROISCRIZIONIMESI',
                      'APPDELETEISCRIZIONIFLAG',
                      'APPDELETEISCRIZIONIORE',
                      'APPTRAINERPRESENZE'
                    ];
      let arBoolean = ['APPSHOW','APPISCRIZIONI','APPPRENOTAZIONI',
                       'APPISCRIZIONIEVENTI','APPSHOPONLINE','APPSHOPPACCHETTIORARI',
                      'APPSHOWCORSIPERIODI','APPSHOWCORSIGIORNATA','APPPROFILEPACCHETTIORARI'];
      let arDate = [];
      let arDateTime =[];
      let arTime = [];
      let arCollection = ['LOCATIONS','AREALINKS','AREAPAYMENTSETTINGS'];

      objDescriptor.className = 'Area';
      objDescriptor.doRemote = true;
      objDescriptor.classWebApiName = 'AREAOPERATIVA';
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




    /**
     * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
      super.setJSONProperty(data);
      this.setCollection(data);

      this.setOriginal();
    }

    /**
     * Reimposta l'Array delle location creando veri oggetti di tipo Location
     * @param resultData Json Information
     */
    setCollection(data: any) {
      if (data) {

        if (data.LOCATION) {
          data.LOCATION.forEach(element => {
            let objLocation = this.findLocationByID(element.ID);
            if (!objLocation) {
              //Nuova Location
              objLocation = new Location();
              //Aggiungo all'Array
              this.LOCATIONS.push(objLocation);
            }

            objLocation.setJSONProperty(element);
          });
        }

        if (data.AREALINK) {
          data.AREALINK.forEach(element => {
            let objAreaLink = this.findAreaLinkByID(element.ID);

            if (!objAreaLink) {
              //Nuova Area Link
              objAreaLink = new AreaLink();
              //Aggiungo all'Array
              this.AREALINKS.push(objAreaLink);
            }

            objAreaLink.setJSONProperty(element);
          });
        }
        
        //se nell'oggetto any che mi arriva è presente il campo AREAPAYMENTSETTING[]
        if (data.AREAPAYMENTSETTING){
          //ne scorro gli elementi
          data.AREAPAYMENTSETTING.forEach(element => {
            //cerco se tra gli elementi che ho in memoria è già prsente l'elemento che mi è arrivato
            let objPaymentSetting= this.findPaymentSettingById(element.ID)
            //se non è presente
            if (!objPaymentSetting){
              //ne creo uno nuovo
              objPaymentSetting= new AreaPaymentSetting();
              //e lo inserisco nell'array
              this.AREAPAYMENTSETTINGS.push(objPaymentSetting);
            }
            //ora valorizzo il nuovo oggetto (che ci fosse già o no è indifferente) con le proprietà dell'oggetto che mi è arrivato
            objPaymentSetting.setJSONProperty(element);
          });
        }

      }
    }

    /**
     * Cerca nell'array Location e torna la location se trovata
     * @param idLocation Location cercata
     */
    findLocationByID(idLocation: string) {
      return this.LOCATIONS.find(element => {
        return element.ID == idLocation;
      });
    }


    /**
     * Cerca nella colletion Area Link e ritorna il Link
     * @param idLink Link desiderato
     */
    findAreaLinkByID(idLink: string) {
      return this.AREALINKS.find(element => {
        return element.ID == idLink;
      });
    }

     /**
     * Cerca nella colletion areapaymentsettings  e ritorna l'elemeto desiderato
     * @param id id dell'elemento eesiderato
     */
    findPaymentSettingById(id: string) {
      return this.AREAPAYMENTSETTINGS.find(element => {
        return element.ID == id;
      });
    }


    /**
     * Cerca e ritorna un link con il tipo pagina passato
     * @param tipo Tipo pagina richiesto
     */
    findAreaLinkByPageType(tipo: PageType) {
      return this.AREALINKS.find(element => {
        return element.TIPOURL == tipo;
      });
    }


    /**
     * Ritorna la distanza tra Lat/Lon dell'area e la posizione passata
     * @param position Posizione rilevata
     * @returns Numero di Metri di distanza tra 2 punti
     */
    distanceFrom(position: Position): number {
      let dist: number = 0;

      if (this.LATITUDINE && this.LONGITUDINE) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        var radlat1 = Math.PI * this.LATITUDINE/180;
        var radlat2 = Math.PI * lat/180;
        var theta = this.LONGITUDINE-lon;
        var radtheta = Math.PI * theta/180;
        dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

        if (dist > 1) {
            dist = 1;
        }

        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;

      }
      
      return dist;
  }


  /**
   * Dato un settore di pagamento, torna i pagamenti che supportano il settore
   * @param Settore Settore dove si richiedono i pagamenti
   */
  getPaymentFor(settore: SettorePagamentiAttivita):AreaPaymentSetting[] {
    let arSetting: AreaPaymentSetting[] = [];

    console.log(this);

    if (this.AREAPAYMENTSETTINGS && this.AREAPAYMENTSETTINGS.length != 0) {

      //Ciclo sui modi di pagamento
      for (let index = 0; index < this.AREAPAYMENTSETTINGS.length; index++) {

          const elPaymentSetting = this.AREAPAYMENTSETTINGS[index];

          /* Se il pagamento è adatto al settore */
          if (elPaymentSetting && elPaymentSetting.isFor(settore)) {
            arSetting.push(elPaymentSetting);
          }
          
      }
    }    
    
    return arSetting;
  }

  /**
   * Ritorna TRUE o FALSE a seconda se con 
   * l'impostazione dell'Area posso iscrivermi
   * @param dataLezione 
   */
  canDailyIscrizione(dataLezione: Date): boolean {
    let flagIscrizione = false;

    //Posso iscrivermi dall'App
    if (dataLezione && this.APPISCRIZIONI == true) {
      
      //Vediamo se ho limitazioni
      switch(this.APPFUTUROISCRIZIONIFLAG) {
        case FuturoIscrizioneGiornaliere.sempre:
            flagIscrizione = true;
          break;

        case FuturoIscrizioneGiornaliere.limitata:
          //Aggiungo ad oggi i mesi limiti
          let limitDate: Date = new Date();
          limitDate = MyDateTime.calcola(limitDate, this.APPFUTUROISCRIZIONIMESI, TypePeriod.months);
          flagIscrizione = MyDateTime.isBefore(dataLezione, limitDate);
          break;

        default:
            flagIscrizione = true;
          break;
      }
    }

    return flagIscrizione;
  }

}