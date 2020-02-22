import { TypeDefinition, Descriptor } from '../models/descriptor.model';
 
  export class IDDocument {
    ID: string;
    
    do_updated: boolean;
    do_loaded: boolean;
    do_inserted: boolean;
    do_deleted: boolean;
    selected: boolean;
  
    constructor() {
        this.do_inserted = true;
        this.ID = this.newID();
        this.selected = false;
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
                    _this[element] = +dataObject[element]; 
                    break;

                  case TypeDefinition.numberDecimal:
                    _this[element] = +dataObject[element]; 
                    break;

                  case TypeDefinition.time:
                    //Campo di tipo ORA
                    stringValue = dataObject[element]; //Valore Stringa

                    //Non ho dentro il giorno ma solo l'ora
                    if (!stringValue.includes('-') && stringValue.includes(':')) {
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
                    if (!stringValue.includes('-') && stringValue.includes(':')) {
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




    //Formatta una data passata in ISO (Solo la parte data)
    formatDateISO(data: Date) {
      let intMese = data.getMonth() + 1;
      let mese = (intMese > 9) ? (intMese + '') : ('0' + intMese);
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


    //#region DECODIFICA PROPRIETA

    //Esegue la decodifica della proprieta
    //Tutte le proprietà hanno la chiave 
    //in un campo denominato IDXYZ 
    //e decodificate in campi _DESCRXYZ

    /**
     * 
     * @param propertyToDecode Nome della proprietà da decodificare
     * @param listDecode Lista con gli elementi
     * @param propertyLookup Nome della proprieta a cui attingere la decodifica
     */
    lookup(propertyToDecode: string, listDecode: any[], propertyLookup: string) {
      let namePropertyIDX = propertyToDecode;
      let namePropertyDESCR = '_DESCR' +  namePropertyIDX.substring(2, namePropertyIDX.length);
      let _this = this;
      

      //Proprieta Indice e Descrizione presenti
      if (_this.hasOwnProperty(namePropertyIDX) && _this.hasOwnProperty(namePropertyDESCR)) {
        if (listDecode && propertyLookup) {

          let element = listDecode.find(value => {
            return value.ID == _this[namePropertyIDX]
          });

          if (element) {
            if (element.hasOwnProperty(propertyLookup)) {
              _this[namePropertyDESCR] = element[propertyLookup];
            }
          }

        }
      }
      

    }
    //#endregion
  }



 
  