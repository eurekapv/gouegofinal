import { Pipe, PipeTransform } from '@angular/core';
import { ValueList, TipoMasterDocumento } from 'src/app/models/valuelist.model';

@Pipe({
  name: 'tipomasterdocumento'
})
export class TipomasterdocumentoPipe implements PipeTransform {

  transform(value: number): string {   
    let label = '';

    label = ValueList.decode(TipoMasterDocumento, value);

    return label;
  }

}
