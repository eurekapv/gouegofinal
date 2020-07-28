import { IDDocument } from '../library/models/iddocument.model';
import { Location } from '../models/location.model';
import { TipoArea, PageType } from '../models/valuelist.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { AreaLink } from './arealink.model';


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
  
    constructor(onlyInstance?:boolean) {
      
      super(onlyInstance);
      this.AREALINKS=[];
      this.LOCATIONS = [];

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
      let arNumber = ['TIPOAREA'];
      let arBoolean = [];
      let arDate = [];
      let arDateTime =[];
      let arTime = [];
      let arCollection = ['LOCATIONS','AREALINKS'];

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
    }

    /**
     * Reimposta l'Array delle location creando veri oggetti di tipo Location
     * @param resultData Json Information
     */
    setCollection(data: any) {
      this.LOCATIONS = [];
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
     * Cerca e ritorna un link con il tipo pagina passato
     * @param tipo Tipo pagina richiesto
     */
    findAreaLinkByPageType(tipo: PageType) {
      return this.AREALINKS.find(element => {
        return element.TIPOURL == tipo;
      });
    }


}