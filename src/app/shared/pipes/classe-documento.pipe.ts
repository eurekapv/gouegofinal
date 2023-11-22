import { Pipe, PipeTransform } from '@angular/core';
import { ClasseDocumento } from 'src/app/models/archivi/tipodocumentazione.model';
import { ValueList } from '../../models/zsupport/valuelist.model';

@Pipe({
  name: 'classeDocumento'
})
export class ClasseDocumentoPipe implements PipeTransform {

  transform(value: number): string {   
    let label = '';

    label = ValueList.decode(ClasseDocumento, value);
    return label;
  }

}
