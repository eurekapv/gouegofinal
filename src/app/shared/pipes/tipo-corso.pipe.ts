import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, TipoCorso } from '../../models/zsupport/valuelist.model';


@Pipe({
  name: 'tipoCorso'
})
export class TipoCorsoPipe implements PipeTransform {

  transform(value: number): string {   
    let label = '';

    label = ValueList.decode(TipoCorso, value);
    return label;
  }

}
