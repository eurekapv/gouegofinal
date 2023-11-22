import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Area } from '../../models/struttura/area.model';



@Injectable({
  providedIn: 'root'
})
export class PosizioneService {

  constructor() { }

  /**
   * La funzione restituisce una promise con la posizione attuale
   */
  getCurrentPosition(): Promise<Position>{
    let posOpt: PositionOptions = {
      enableHighAccuracy: false
    }
    return Geolocation.getCurrentPosition(posOpt);
    
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
                  
                    //se effettivamento ho la posizione, posso ciclare sull'array
                    for (let index = 1; index < listAree.length; index++){
                      if(listAree[index].distanceFrom(currentPosition)){
                        //se è possibile calcolare la distanza per quest'area (sono presenti lat e long)
                        if(listAree[index].distanceFrom(currentPosition) < nearestArea.distanceFrom(currentPosition)){
                          //se l'area corrente è più vicina di quella memorizzata, la salvo
                          nearestArea = listAree[index];
                        }
                      }
                    }

                  //ho finito, posso risolvere
                  resolve(nearestArea)
                })
              .catch(error => {
                
                  //errore, non ho recuperato la posizione
                  reject(error);
                });
        }
        
    
      }

      else{
        //errore, non mi hanno passato le aree
        reject('Errore, lista aree vuota');
      }
    })
  }

}
