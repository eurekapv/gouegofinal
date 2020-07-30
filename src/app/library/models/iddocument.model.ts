import { TypeDefinition, Descriptor, TypeReflector } from './descriptor.model';
import { MyDateTime } from './mydatetime.model';

 
  export class IDDocument {
    ID: string;
    
    do_updated: boolean;
    do_loaded: boolean;
    do_inserted: boolean;
    do_deleted: boolean;
    selected: boolean;
  
    /**
     * 
     * @param onlyInstance Non inizializzare con valori predefiniti il documento, crea solo l'istanza
     */
    constructor(onlyInstance?:boolean) {

       if (!onlyInstance) {
          this.ID = this.newID();
          this.do_inserted = true;
          this.selected = false;
       }
    }


    get inserted(): boolean {
      return this.do_inserted;
    }

    get deleted(): boolean {
      return this.do_deleted;
    }


    /**
     * Cerca nel documento la proprietà icone o iconasport e ne calcola 
     * la stringa esadecimale
     */
    get htmlIconHex() {
      let value = '';
      let valueIcon = '';
      if (this.hasOwnProperty('IDSPORT')) {
        if (this.hasOwnProperty('ICONASPORT')) {
          value = this['ICONASPORT'];
        }
      }
      else if (this.hasOwnProperty('ICONA')) {
        value = this['ICONA'];
      }

      if (value.length == 0) {
        value = 'e830'
      }

      valueIcon = '&#x' + value + ';'
  
      return valueIcon;
    }

    /**
     * Ritorna un array di Type Reflector dei campi 
     * che formano l'insieme delle ForeignKeys
     */
    get ForeignKeys(): TypeReflector[] {
      let objDescriptor = this.getDescriptor();

      return objDescriptor.foreignKeys;
    }
  
 

    
    //Generazione GUID
    newID() {
      let strValue = '10000000-1000-4000-8000-100000000000';
      let guid = strValue.replace(/[018]/g, c =>
        (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16));

      guid = guid.toUpperCase();

      
      return guid;
    }
    

    /**
     * Metodo Overrable
     */
    getDescriptor(): Descriptor {
      let objDescriptor = new Descriptor();
      return objDescriptor;
    }


    /**
     * Esporta l'oggetto in JSON
     * @param clearDOProperty Non esporta le proprietà tipiche del documento (selected, do_insert etc)
     * @param clearPKProperty Non esporta la Chiave primaria
     * @param clearPrivateProperty Non esporta le proprietà private
     */
    exportToJSON(clearDOProperty: boolean, clearPKProperty: boolean, clearPrivateProperty: boolean) {
      let _this = this;
      let arProperty = Object.keys(_this);
      //Chiedo il Descrittore della classe
      let objDescriptor = _this.getDescriptor();
      let strJSON = '';
      let doProperty = ['do_updated',' do_loaded','do_inserted','do_deleted','selected'];
      let propExclud = [];
      let row = '';
      

      // Vuole eliminare anche le chiavi Primarie, le aggiungo all'Array
      if (clearDOProperty) {
        //Popolo l'array propExclud con le doProperty
        doProperty.forEach(element => {
          propExclud.push(element);
        });
      }

      //Se vuole non esportare la chiave primaria la aggiungo all'Array esclusioni
      if (clearPKProperty) {
        propExclud.push('ID');
      }

      arProperty.forEach(element => {

        //Inizio la riga con l'elemento
        row = '\"' + element + '\"' + ':';

        //Proprietà Basica non di tipo Array
        if (Array.isArray(_this[element]) == true) {
          //Qui gestisco l'Array
          let arElements = _this[element];
          let strArray = '';
          let strElArray = '';
          
          //Ciclo sugli elementi
          for (let index = 0; index < arElements.length; index++) {
            let element: IDDocument;
             element = arElements[index];
             strElArray = element.exportToJSON(clearDOProperty, clearPKProperty, clearPrivateProperty);
             if (strArray.length !== 0) {
                strArray += ', '
             }
             strArray += strElArray;
          }

          row += '[' + strArray + ']';

          if (strJSON.length !== 0) {
            strJSON += ', ';
          }

          strJSON += row;
        }
        else {
          let skip = false;
          //Vuole eliminare le proprietà DO e private e/o le chiavi primarie
          if (propExclud.length !== 0) {
            if (propExclud.includes(element)) {
              skip = true;
            }
            else if (clearPrivateProperty && element.startsWith('_')) {
              //Siccome vuole eliminare le DOProperty tolgo anche le proprieta se private
              skip = true;
            }
          }

          //Proseguo con l'esportazione
          if (!skip) {

              //Chiedo il Tipo del Campo con il descriptor
              let tipoCampo = objDescriptor.getType(element);

              if (tipoCampo !== TypeDefinition.undefined && (_this[element]!== undefined)) {

                switch (tipoCampo) {

                  case TypeDefinition.boolean:
                    row += _this[element];
                    break;
                
                  case TypeDefinition.number:
                    row += _this[element]; 
                    break;

                  case TypeDefinition.numberDecimal:
                    row += _this[element]; 
                    break;

                  case TypeDefinition.time:
                    //E' un orario
                    row += '\"' + this.formatDateTimeISO(_this[element]) + '\"';
                    break;

                  case TypeDefinition.date:
                    //E' una data
                    row += '\"' + this.formatDateISO(_this[element]) + '\"';
                    break;

                  case TypeDefinition.dateTime:
                    //Campo di tipo DATAORA
                    row += '\"' + this.formatDateTimeISO(_this[element]) + '\"' ;
                    break;
                  case TypeDefinition.char:
                    row += '\"' + _this[element] + '\"';
                    break;

                  default:
                    row += _this[element];
                    break;
                }

              } 
              else {
                row += 'null';
              }   
              
              
              if (strJSON.length !== 0) {
                strJSON += ', ';
              }

              strJSON += row;
          }

        }
      });

      strJSON = '{' + strJSON + '}';

      return strJSON;
    }

    /**
     * Ritorna il documento in Stringa JSON
     */
    toJSON() {
      let strJSON = '';
      let _this = {...this};
      let arKeys = Object.keys(_this);

      /** Ciclo sulle proprietà */
      /* Ho il problema di formattazione Data/Ora che INDE lo vuole come YYYY-MM-DD hh:nn:ss */
      arKeys.forEach(element => {
        if (_this[element] instanceof Date) {
          //Se è di tipo data lo cambio formattandolo in ISODATETIME
          _this[element] = this.formatDateTimeISO(_this[element]);
        }
      });

      // Ora eseguo lo stringify
      strJSON = JSON.stringify(_this);

      return strJSON;
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
                    let value = parseInt(dataObject[element],10);
                    
                    if (value === -1) {
                      _this[element] = true;  
                    }
                    else {
                      _this[element] = false;
                    }

                    
                    break;
                
                  case TypeDefinition.number:
                    _this[element] = +dataObject[element]; 
                    break;

                  case TypeDefinition.numberDecimal:
                    _this[element] = +dataObject[element]; 
                    break;

                  case TypeDefinition.time:
                    _this[element] = MyDateTime.stringToDateObject(dataObject[element]);
                    break;

                  case TypeDefinition.date:
                    //E' una data
                    _this[element] = MyDateTime.stringToDateObject(dataObject[element]);
                    break;

                  case TypeDefinition.dateTime:
                    _this[element] = MyDateTime.stringToDateObject(dataObject[element]);
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
      
      let format = MyDateTime.formatDateISO(data);

      return format;
    }

    //Formatta una data passata in ISO (Data e Ora)
    formatDateTimeISO(data: Date) {
      let final = MyDateTime.formatDateTimeISO(data);
      return final;
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


    /**
     * Tipo della proprietà
     * @param PropertyName Nome della proprietà
     */
    getPropertyType(PropertyName: string): TypeDefinition {
      
      let objDescriptor = this.getDescriptor();

      return objDescriptor.getType(PropertyName);

    }

    /**
     * Ritorna TypeReflector del campo passato come parametro
     * @param fieldName Nome del campo
     */
    getTypeReflectorByFieldName(fieldName: string): TypeReflector {
      let objDescriptor = this.getDescriptor();

      return objDescriptor.getByFieldName(fieldName);

    }

    /**
     * Controlla se il campo è presente nell'istanza
     * @param fieldName Nome del campo richiesto
     */
    propertyInDoc(fieldName: string): boolean {
      let arProperty = Object.keys(this);
      let contain = false;
      if (fieldName && fieldName.length !== 0) {
        contain = arProperty.includes(fieldName);
      }

      return contain;

    }

    /**
     * Controlla se un campo contiene dei dati oppure è vuoto
     * considerando qualsiasi valore undefined, null, nullstring
     * @param fieldName Nome del campo
     */
    isEmpty(fieldName:string): boolean {
      let inDoc = this.propertyInDoc(fieldName);
      let empty = false;

      if (inDoc) {
        if (this[fieldName]==undefined || this[fieldName]== null) {
          empty = true;
        }
        else {
          empty = (this[fieldName] + '').length==0?true:false;
        }
      }
      else {
        empty = true;
      }

      return empty;
    }

    //#endregion

    //#region JSON MODIFICHE
    /**
     * L'istanza documento viene popolata con la CHIAVE PRIMARIA 
     * e tutte le proprietà che risultano presenti in docActual ma con un valore modificato in docModify
     * L'istanza del documento puo' essere usata per costruire un JSON di Aggiornamento verso il server
     * da includere nel body
     * Documento Attuale e Documento Modificato non verranno alterati dall'operazione
     * Ritorna TRUE se ci sono proprietà modificate
     * @param docActual Documento Attuale
     * @param docModify Documento Modificato
     */
    setWithChanges(docActual: IDDocument, docModify: IDDocument): boolean {
      let hasModifiche = false;
      let _this = this;

      // La chiave primaria viene sempre copiata
      _this.ID = docActual.ID;

      //Chiedo il Descrittore della classe
      let objDescriptor = _this.getDescriptor();

      /**
       * Ciclo sui campi del documento
       */
      objDescriptor.fields.forEach(field => {
        
        // Per includere il campo 
        // 1) Non deve essere una collection
        // 2) Non deve essere un campo di Servizio documentale ID, do_deleted etc 
        // 3) Deve esistere sul server
        if (field.fieldType !== TypeDefinition.collection && !field.serviceField() && field.nativeField()) {
          // Il documento con le modifiche possiede il campo
          if (docModify.hasOwnProperty(field.fieldName)) {
            // Il valore è differente
            if (docActual[field.fieldName] !== docModify[field.fieldName]) {
              //Applico la modifica
              _this[field.fieldName] = docModify[field.fieldName];
              hasModifiche = true;
            }
          }
        }
      })
      
 

      return hasModifiche;
    }



    /**
     * Modificatore dell'esportazione JSON per le Date
     * @param key Chiave
     * @param value Valore
     */
    JSONReplacer(key: any, value: any) {
      if (value instanceof Date ) {
        return this.formatDateTimeISO(value);
      }

      return value;
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





  