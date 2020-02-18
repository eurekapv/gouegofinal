import { TypeDefinition, Descriptor } from '../models/descriptor.model';
 
  export class IDDocument {
    ID: string;
    
    do_updated: boolean;
    do_loaded: boolean;
    do_inserted: boolean;
    do_deleted: boolean;
  
    constructor() {
        this.do_inserted = true;
        this.ID = this.newID();
    }


    get inserted(): boolean {
      return this.do_inserted;
    }

    get deleted(): boolean {
      return this.do_deleted;
    }
  
    newID() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    /**
     * Metodo Overrable
     */
    getDescriptor(): Descriptor {
      let objDescriptor = new Descriptor();
      return objDescriptor;
    }

    /**
     * Metodo Overrable
     */
    describerType(fieldName): TypeDefinition {
      let retType = TypeDefinition.char;

      return retType

  } 
  
     // Imposta le proprietà basiche dell'oggetto via JSON
     setJSONProperty(dataObject: any) {
      let _this = this;
      let arProperty = Object.keys(dataObject);
      let fakeDate = new Date();
      let stringValue = '';

      //Chiedo il Descrittore della classe
      let objDescriptor = _this.getDescriptor();
  
      // Gli elementi di tipo Array non li copio
      arProperty.forEach(element => {
          if (Array.isArray(dataObject[element]) == false) {

              //Chiedo il Tipo del Campo con il descriptor
              let tipoCampo = objDescriptor.getType(element);

              if (tipoCampo !== TypeDefinition.undefined) {
                switch (tipoCampo) {

                  case TypeDefinition.boolean:
                    _this[element] = parseInt(dataObject[element],10);
                    break;
                
                  case TypeDefinition.number:
                    _this[element] = parseInt(dataObject[element],10);
                    break;

                  case TypeDefinition.numberDecimal:
                    _this[element] = parseFloat(dataObject[element]);
                    break;

                  case TypeDefinition.time:
                    //Campo di tipo ORA
                    stringValue = dataObject[element]; //Valore Stringa

                    //Non ho dentro il giorno ma solo l'ora
                    if (!stringValue.includes('-') || stringValue.includes(':')) {
                      stringValue = this.formatDateISO(fakeDate) + ' ' + stringValue;
                      _this[element] = new Date(stringValue);  
                    }
                    else {
                      //Gia presente sia Data che Ora
                      _this[element] = new Date(stringValue);
                    }

                    break;

                  case TypeDefinition.date:
                    //E' una data
                    _this[element] = new Date(dataObject[element]);
                    break;

                  case TypeDefinition.dateTime:
                    //Campo di tipo ORA
                    stringValue = dataObject[element]; //Valore Stringa

                    //Non ho dentro il giorno ma solo l'ora
                    if (!stringValue.includes('-') || stringValue.includes(':')) {
                      stringValue = this.formatDateISO(fakeDate) + ' ' + stringValue;
                      _this[element] = new Date(stringValue);  
                    }
                    else {
                      //Gia presente sia Data che Ora
                      _this[element] = new Date(stringValue);
                    }

                    break;

                  default:
                    _this[element] = dataObject[element] + '';
                    break;
                }

              }
              
             
          }
          

      });

    }

    // Imposta le proprietà basiche dell'oggetto via JSON
    setJSONProperty2(dataObject: any) {
      let _this = this;
      let arProperty = Object.keys(dataObject);
      let fakeDate = new Date();
  
      // Gli elementi di tipo Array non li copio
      arProperty.forEach(element => {
          if (Array.isArray(dataObject[element]) == false) {

              //Con la funzione describer conosco il tipo del campo
              let tipoCampo = _this.describerType(element);
              
              //INFORMAZIONE DI TIPO DATA O DATA ORA
              if ([TypeDefinition.date,TypeDefinition.dateTime, TypeDefinition.time].includes(tipoCampo)) {

                if (tipoCampo == TypeDefinition.date) {
                  //E' una data
                  _this[element] = new Date(dataObject[element]);
                }
                else if (tipoCampo == TypeDefinition.dateTime || tipoCampo == TypeDefinition.time) {
                  //Campo di tipo ORA
                  let stringValue : string = dataObject[element]; //Valore Stringa

                    //Non ho dentro il giorno ma solo l'ora
                    if (!stringValue.includes('-') || stringValue.includes(':')) {
                      stringValue = this.formatDateISO(fakeDate) + ' ' + stringValue;
                      _this[element] = new Date(stringValue);

                      
                    }
                    else {

                      //Gia presente sia Data che Ora
                      _this[element] = new Date(stringValue);
                    }

                }

              }
              else {
                // Informazione Stringa
                _this[element] = dataObject[element];
              }
              
          }
          

      });

    }





    //Formatta una data passata in ISO (Solo la parte data)
    formatDateISO(data: Date) {
      let mese = (data.getMonth() + 1 <= 9) ? data.getMonth() + 1 : '0' + data.getMonth() + 1;
      let format = [data.getFullYear(), mese, data.getDate()].join('-');

      return format;
    }

    /** Imposta il documento Originale come se fosse sul database */
    setOriginal() {
      this.do_updated = false;
      this.do_inserted = false;
      this.do_deleted = false;
      this.do_loaded = true;
    }



    /**
     * Imposta tutti gli elementi come cancellati
     * @param arElements Array di ELementi IDDOcument o che estendono IDDocument
     */
    static setAllDeleting(arElements: IDDocument[]) {
      if (arElements) {
        arElements.forEach(element => {
          element.do_deleted = true;
        });
      }
    }

    //#region FUNZIONI STATICHE
    
    /**
     * Ritorna TRUE / FALSE a seconda se un elemento è Numerico o No
     * @param value Valore da controllare
     */
    static isNumber(value: string | number): boolean
    {
      return ((value != null) &&
              (value !== '') &&
              !isNaN(Number(value.toString())));
    }

    //#endregion
  }



 
  