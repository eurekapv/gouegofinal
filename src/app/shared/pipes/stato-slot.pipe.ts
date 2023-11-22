import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, StatoSlot} from '../../models/zsupport/valuelist.model';

@Pipe({
  name: 'statoSlot'
})
export class StatoSlotPipe implements PipeTransform {

  transform(value: number): string {   
    let label = '';

    label = ValueList.decode(StatoSlot, value);
    return label;
  }

}
