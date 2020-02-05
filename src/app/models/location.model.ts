import { IDDocument } from './iddocument.model';
import { LocationImage } from './locaton-image.model';
import { Campo } from './campo.model';

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
    
  
    constructor() {
      let standardImage = 'assets/img/sport2_mini.png';
      super();
      this.IMAGEURL = standardImage;
      this.LOCATIONIMAGE = [];
      this.CAMPO = [];

      //Creo una immagine standard
      let newImage = new LocationImage;
      newImage.COVERIMAGE = true;
      newImage.IMAGEURL = standardImage;
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
}