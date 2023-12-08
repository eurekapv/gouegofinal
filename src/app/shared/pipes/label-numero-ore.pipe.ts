import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelNumeroOre'
})
export class LabelNumeroOrePipe implements PipeTransform {

  transform(value: number, 
            mode:'short'|'long' = 'short',
            valueIs: 'ore'|'minuti' = 'ore'): string {
    let minuti: number = 0;
    let ore: number = 0;
    let retValue = "";
    let lblMin: string[] = [];
    let lblOre: string[] = [];
    const sing = 0;
    const plur = 1;

    if (mode == 'long') {
      lblMin.push('minuto');
      lblMin.push('minuti');
      lblOre.push('ora');
      lblOre.push('ore');
    }
    else {
      lblMin.push('min');
      lblMin.push('min');
      lblOre.push('h');
      lblOre.push('h');
    }

    if (valueIs == 'ore') {
  
      if (value < 1) {
        minuti = value * 60;
        retValue = minuti + ' ' + lblMin[minuti==1 ? sing : plur];
      }
      else if (value == 1) {
        retValue = value + ' ' + lblOre[0];
      }
      else {
        ore = Math.trunc(value);
        minuti = (value - ore) * 60;
        
        retValue = `${ore} ${lblOre[ore==1 ? sing : plur]}`;
  
        if (minuti != 0) {
          retValue = retValue + ' ' + `${minuti} ${lblMin[minuti==1 ? sing : plur]}`
        }
      }
    }
    else {
      if (value < 60) {
        minuti = value;
        retValue = `${value} ${lblMin[minuti==1 ? sing : plur]}`;
      }
      else {
        ore = Math.trunc(value/60);
        minuti = Math.trunc(((value/60) - ore) * 60);
        retValue = `${ore} ${lblOre[ore==1 ? sing : plur]} e ${minuti} ${lblMin[minuti==1 ? sing : plur]}`
      }
    }
    return retValue;
  }

}
