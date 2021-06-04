import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, StrutturaCampo } from '../../models/valuelist.model';

@Pipe({
  name: 'strutturaCampo'
})
export class StrutturaCampoPipe implements PipeTransform {

  transform(value: number): string {
    let label = '';

    label = ValueList.decode(StrutturaCampo, value);
    return label;
  }

}
