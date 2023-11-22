import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, TipoCampo } from 'src/app/models/zsupport/valuelist.model';

@Pipe({
  name: 'tipoCampo'
})
export class TipoCampoPipe implements PipeTransform {

  transform(value: number): string {
    let label = '';

    label = ValueList.decode(TipoCampo, value);
    
    return label;
  }

}
