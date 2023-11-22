import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, TargetSesso } from '../../models/zsupport/valuelist.model';

@Pipe({
  name: 'targetSesso'
})
export class TargetSessoPipe implements PipeTransform {

  transform(value: number): string {   
    let label = '';

    label = ValueList.decode(TargetSesso, value);
    return label;
  }

}
