import { TypeDefinition, Descriptor } from '../models/descriptor.model';
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



 
  