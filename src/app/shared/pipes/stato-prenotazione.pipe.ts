import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, StatoPrenotazione } from '../../models/zsupport/valuelist.model';

@Pipe({
  name: 'statoPrenotazione'
})
export class StatoPrenotazionePipe implements PipeTransform {

  transform(value: number): string {
    let label = '';

    label = ValueList.decode(StatoPrenotazione, value);

    return label;
  }

}
