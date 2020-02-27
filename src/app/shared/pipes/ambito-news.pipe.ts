import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, AmbitoNews } from '../../models/valuelist.model';

@Pipe({
  name: 'ambitoNews'
})
export class AmbitoNewsPipe implements PipeTransform {

  transform(value: number): string {
    let label = '';

    label = ValueList.decode(AmbitoNews, value);

    return label;
  }

}
