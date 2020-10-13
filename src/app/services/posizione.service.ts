import { Injectable } from '@angular/core';

import { GeolocationPosition, Plugins } from '@capacitor/core';
import { Area } from '../models/area.model';
const { Geolocation } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class PosizioneService {

  constructor() { }

  /**
   * La funzione restituisce una promise con la posizione attuale
   */
  getCurrentPosition(): Promise<GeolocationPosition>{
    return Geolocation.getCurrentPosition();
    
  }

  /**
 * data in input una lista di aree, la funzione restituisce l'oggetto area più vicino alla posizione attuale
 * @param listAree la lista delle aree tra cui cercare
 */
  getNearestArea(listAree: Area[]){
    return new Promise<Area> ((resolve, reject) => {
      
      let nearestArea: Area;
  
      //Se ci sono delle aree
      if (listAree && listAree.length != 0){

        //inizio a salvarmi la prima
        nearestArea = listAree[0]

        //se è solo una ho finito
        if (listAree.length == 1){
          resolve(nearestArea);
        }

        else{
          //se sono almeno due
          //recupero la posizione attuale
          this.getCurrentPosition()
          .then(currentPosition => {

            //ora che ho la posizione, posso ciclare sull'array
            for (let index = 1; index < listAree.length; index++){
              if(listAree[index].distanceFrom(currentPosition) < nearestArea.distanceFrom(currentPosition)){
                nearestArea = listAree[index];
              }
            }

            //ho finito, posso risolvere
            resolve(nearestArea)
          })
        }
        
    
      }
    })
  }

}
