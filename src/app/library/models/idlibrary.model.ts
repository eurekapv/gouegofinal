import { isDate } from 'moment';
import { TypeDefinition } from './descriptor.model';
import { IDDocument, ParamsExport } from './iddocument.model';
import { MyDateTime } from './mydatetime.model';

export class IDLibrary {

    /**
     * Converte e formatta un valore in stringa
     * Usato per scriverlo nei parametri di chiamata
     * @param tipo Tipo del dato
     * @param value Valore
     */
    static exportJSONValue(value: any): string {
        let tipo:TypeDefinition;
        let strValue = '';

        switch (tipo) {
          case TypeDefinition.char:
              strValue = `\"${value}\"`;
          break;
        
          case TypeDefinition.date:
              strValue = MyDateTime.formatDateISO(value);
          break;
  
          case TypeDefinition.dateTime:
              strValue = MyDateTime.formatDateTimeISO(value);
          break;
  
          case TypeDefinition.time:
              strValue = MyDateTime.formatTime(value);
          break;
  
          case TypeDefinition.boolean:
              if (value) {
                strValue = '-1'
              }
              else {
                strValue = '0';
              }
          break;
          
          case TypeDefinition.number:
          case TypeDefinition.numberDecimal:
              strValue = value + '';
            break;
        
          case TypeDefinition.collection:
              let arValues: [];
              arValues = value;

              strValue = '[';
              for (let index = 0; index < arValues.length; index++) {
                  const element = arValues[index];
                  const elStr = IDLibrary.exportJSONValue(element);
                  if (elStr && elStr.length !== 0) {
                      if (strValue.length != 0) {
                          strValue += ', ';
                      }
                      strValue += elStr;
                  }
              }
              strValue += ']';
            break;

          case TypeDefinition.document:
              let paramExport: ParamsExport;
              paramExport.clearDOProperty = true;
              paramExport.clearPKProperty = false;
              paramExport.clearPrivateProperty = true;
              paramExport.onlyModified = true;
              paramExport.numLivelli = 999;

              let document:IDDocument = value;
              strValue = document.exportToJSON(paramExport);
              break;
        case TypeDefinition.undefined:
            strValue = 'null';
            break;

        default:
            strValue = 'null';
            break;
        }
  
        return strValue;
      }

    /**
     * Ritorna il tipo di un valore passato
     * @param value Valore da controllare
     */
    static getValueType(value: any): TypeDefinition {
        let typeVar: TypeDefinition;

        switch (typeof value) {
          case "undefined":
            typeVar = TypeDefinition.undefined;
            break;
          case "number":
            typeVar = TypeDefinition.number;
            break;

          case "string":
            typeVar = TypeDefinition.char;
            break;

          case "boolean":
            typeVar = TypeDefinition.boolean;
            break;

          case "bigint":
            typeVar = TypeDefinition.number;
            break;

          case "object":
            try {
              
              if (isDate(value)) {
                typeVar = TypeDefinition.dateTime
              }
              else if (Array.isArray(value)) {
                typeVar = TypeDefinition.collection;
              }
              else {
                typeVar = TypeDefinition.document;
              }
            } catch (error) {
                typeVar = TypeDefinition.undefined;
            }
        
          default:
            typeVar = TypeDefinition.undefined;
            break;
        }
    
        return typeVar;
      }
}