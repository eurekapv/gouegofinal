import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelGiorno'
})
export class LabelGiornoPipe implements PipeTransform {

  transform(value: number): string {
    let label = '';
    switch (value) {
      case 1:
        label = 'domenica';
        break;
      case 2:
        label = 'lunedi\'';
        break;
      case 3:
        label = 'martedi\'';
        break;
      case 4:
        label = 'mercoledi\'';
        break;
      case 5:
        label = 'giovedi\'';
        break;        
      case 6:
        label = 'venerdi\'';
        break;        
      case 7:
        label = 'sabato';
        break;                
    }
    
    
    return label;
  }

}
