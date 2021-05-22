import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'src/app/models/valuelist.model';
import { Settimana } from 'src/app/models/settimana.model';

@Pipe({
  name: 'giorniPrevisti'
})
export class GiorniPrevistiPipe implements PipeTransform {

  //Il Pipe serve a trasformare una sequenza di numeri che rappresentano giorni
  //ad esempio 2;3;4 nel rispettivo stringa Martedi, Mercoledi, Giovedi
  //I giorni previsti sono in versione C# 1 = Dom, 2 Lun, etc
  //Qui li passo in versione JS che sono zero-base

  transform(value: string, language: Language, ...args: any[]): string {
    let strDay = '';
    let arGiorni = [];
    let valueReturn = '';
    let smallVersion = false;
    let indexDay = 0;

    if (value !== undefined) {
      if (value.length !== 0) {
        arGiorni = value.split(';');
      }
    }

    if (arGiorni.length !== 0) {

      //Se ho più di 3 giorni chiedo la versione short
      if (arGiorni.length > 3) {
        smallVersion = true;
      }

      //Ciclo sui giorni e li decodifico
      arGiorni.forEach(element => {
        try {
            indexDay = parseInt(element);
            indexDay--;

            if (smallVersion) {
              strDay = Settimana.getsmallLabel(indexDay, language);
            }
            else {
              strDay = Settimana.getLabel(indexDay, language);
            }
    
            
            if (valueReturn.length !== 0)  {
              valueReturn += ', ';
            }

            valueReturn += strDay;

        } catch (error) {
          console.log('Error Parse');
        }
        
      
      });
    }

    return valueReturn;
  }

}
