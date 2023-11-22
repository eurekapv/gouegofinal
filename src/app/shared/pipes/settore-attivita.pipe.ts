import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, SettoreAttivita } from '../../models/zsupport/valuelist.model';

@Pipe({
  name: 'settoreAttivita'
})
export class SettoreAttivitaPipe implements PipeTransform {

  transform(value: number): string {
    let label = '';

    label = ValueList.decode(SettoreAttivita, value);

    return label;
  }


}
