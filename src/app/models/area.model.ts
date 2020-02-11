import { IDDocument } from './iddocument.model';
import { Location } from '../models/location.model';

export enum TipoArea {
    areaGruppo = 10,
    areaIndipendente = 20
} 

export class Area extends IDDocument {
    IDGRUPPOSPORTIVO: string;
    TIPO: TipoArea;
    DENOMINAZIONE: string;
    INDIRIZZO: string;
    CAP: string;
    COMUNE: string;
    PROVINCIA: string;
    ISOSTATO: string;
    LOCATIONS: Location[];
  
    constructor() {
      super();
      this.LOCATIONS = [];
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


}