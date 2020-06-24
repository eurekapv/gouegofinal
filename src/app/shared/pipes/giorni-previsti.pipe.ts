import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'src/app/models/valuelist.model';
import { Settimana } from 'src/app/models/settimana.model';

@Pipe({
  name: 'giorniPrevisti'
})
export class GiorniPrevistiPipe implements PipeTransform {

  //Il Pipe serve a trasformare una sequenza di numeri che rappresentano giorni
  //ad esempio 2;3;4 nel rispettivo stringa Martedi, Mercoledi, Giovedi
  transform(value: string, language: Language, ...args: any[]): string {
    let strDay = '';
    let arGiorni = value.split(';');
    let valueReturn = '';
    let smallVersion = false;

    if (arGiorni.length !== 0) {

      //Se ho più di 3 giorni chiedo la versione short
      if (arGiorni.length > 3) {
        smallVersion = true;
      }

      //Ciclo sui giorni e li decodifico
      arGiorni.forEach(element => {
        
        strDay =(smallVersion ? Settimana.getsmallLabel(parseInt(element), language) : Settimana.getLabel(parseInt(element), language));
        if (valueReturn.length !== 0)  {
          valueReturn += ', ';
        }
      
      });
    }

    return valueReturn;
  }

}
