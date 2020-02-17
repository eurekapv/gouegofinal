import { IDDocument, TypeDefinition } from './iddocument.model';
import { Location } from '../models/location.model';
import { TipoArea } from '../models/valuelist.model';

// export enum TipoArea {
//     areaGruppo = 10,
//     areaIndipendente = 20
// } 

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
     * Classe per eseguire un reflect sulla base del nome del campo
     * @param fieldName Nome del Campo
     */
    describerType(fieldName): TypeDefinition {
      let retType = TypeDefinition.char;
      
      switch (fieldName) {

        case 'TIPO':
          retType = TypeDefinition.number;
          break;

        case 'LOCATIONS':
          retType = TypeDefinition.collection;
          break;

        default:
          retType = TypeDefinition.char;
          break;

      }

      return retType

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