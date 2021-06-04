import { TypeDefinition, Descriptor, TypeReflector } from './descriptor.model';
import { MyDateTime } from './mydatetime.model';


 
  export class IDDocument {
    ID: string;
    
    do_updated: boolean;
    do_loaded: boolean;
    do_inserted: boolean;
    do_deleted: boolean;
    selected: boolean;


    //Condizioni di filtro
    _filterConditions:FilterCondition[];

    //Valori originali
    _original:IDOriginal;

    //Repository per aggiungere documenti di riferimento con quello in esame
    _repositoryRelDoc: IDRepository[];

    //Tag documentali
    _tags: IDTag[];
  
    /**
     * 
     * @param onlyInstance Non inizializzare con valori predefiniti il documento, crea solo l'istanza
     */
    constructor(onlyInstance?:boolean) {

        this._filterConditions = [];
        this._original = new IDOriginal();
        this._repositoryRelDoc = [];
        this._tags = [];

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
  
    /**
     * Imposta il valore nella chiave primaria
     * @param value Valore Chiave Primaria
     */
    setPrimaryKey(value:any) {
      this.ID = value;
    }

    /**
     * Ritorna la PrimaryKey del documento
     * @param type = 'value' Torna il fieldValue
     * @param type = 'name' Torna il fieldName
     */
    getPrimaryKey(type:string = 'value'): any {
      
      let objDescriptor: Descriptor;
      let propName = '';
      let retValue = '';

      objDescriptor = this.getDescriptor();
        if (objDescriptor) {
          propName = objDescriptor.primaryKeyFieldName;
          if (propName) {

            if (type == 'value') {

              try {            
                retValue = this[propName];
              } catch (error) {
                retValue = ''  ;
                console.log(error);
              }
            }
            else if (type == 'name') {
              retValue = propName;
            }

          }
        }
           
        return retValue;
    
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
      objDescriptor.add('ID',TypeDefinition.char);
      return objDescriptor;
    }


    /**
     * Converte e formatta un valore in stringa
     * Usato per scriverlo nei parametri di chiamata
     * @param tipo Tipo del dato
     * @param value Valore
     */
    formatValue(tipo: TypeDefinition, value: any): string {
      let strValue = '';
      switch (tipo) {
        case TypeDefinition.char:
            strValue = value;
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

        default:
          break;
      }

      return strValue;
    }




    /**
     * Esporta l'oggetto in JSON
     * @param paramExport Oggetto con le caratteristiche esportazione
     * contiene 
     *  clearDOProperty Non esporta le proprietà tipiche del documento (selected, do_insert etc)
     *  clearPKProperty Non esporta la Chiave primaria
     *  clearPrivateProperty Non esporta le proprietà private
     *  onlyModified Esporta solo le proprietà diverse dalle original
     *  numLivelli Numero livelli da esportare
     */
    exportToJSON(paramExport: ParamsExport) {
      let _this = this;
      let arProperty = Object.keys(_this);
      //Chiedo il Descrittore della classe
      let objDescriptor = _this.getDescriptor();
      let strJSON = '';
      let doProperty = ['do_updated',' do_loaded','do_inserted','do_deleted','selected'];
      let propExclud = [];
      let row = '';
      let skipAll = false;
      
      if (!paramExport) {
        paramExport = new ParamsExport();
      }

      // Vuole eliminare le doProperty, le aggiungo all'Array
      if (paramExport.clearDOProperty) {
        //Popolo l'array propExclud con le doProperty
        doProperty.forEach(element => {
          propExclud.push(element);
        });
      }

      //Se vuole non esportare la chiave primaria la aggiungo all'Array esclusioni
      if (paramExport.clearPKProperty) {
        propExclud.push(this.getPrimaryKey('name'));
      }

      //Devo esportare solo i documenti modificati e non ci sono modifiche
      if (paramExport.onlyDocModified && !this.isModified(999)) {
        skipAll = true;
      }

      if (!skipAll) {
        
        //Ciclo sulle proprietà
        arProperty.forEach(element => {
          
          let useElement = true;
          
          //Se devo togliere le proprietà private le elimino
          if (paramExport.clearPrivateProperty && element.startsWith('_')) {
            
            useElement = false;
          
          }
  
          //Controlliamo se il valore è diverso dal valore original
          if (paramExport.onlyPropertyModified) {
            //Chiave primaria devo passarla anche se non modificata
            if (element != this.getPrimaryKey('name')) {
              //Controllo se la proprietà risulta modificata o no
              if (_this.propertyIsModified(element) == false) {
                useElement = false;
              }
            }
          }
  
          if (useElement) {
  
            //Inizio la riga con l'elemento
            row = '\"' + element + '\"' + ':';
    
            //Proprietà di tipo Array
            if (Array.isArray(_this[element]) == true) {
              //Qui gestisco l'Array
              let arElements = _this[element];
              let strArray = '';
              let strElArray = '';
              
              //Ciclo sugli elementi
              for (let index = 0; index < arElements.length; index++) {
                let element: IDDocument;
                 element = arElements[index];
                 strElArray = element.exportToJSON(paramExport);

                 if (strElArray && strElArray.trim().length != 0) {
                   if (strArray.length !== 0) {
                      strArray += ', '
                   }
                   strArray += strElArray;
                 }
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
                        let valore = _this[element];
                        //Se la stringa contenesse all'interno simboli di " devono essere esportati come \"
                        //Esempio: "ciao";"tuo" => \"ciao\";\"tuo\"
                        valore = valore.replace(/"/g, "\\\"");
                        row += '\"' + valore + '\"';
                        
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
  
          }
        });
  
        strJSON = '{' + strJSON + '}';

      }

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

      //Imposto che il documento è originale
      this.setOriginal();

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

      //Imposta il documento come originale
      this._original.setAsOriginal(this);

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

    //#region REFLECTOR PROPRIETA'

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
    //#endregion



    /**
     * Controlla se un campo contiene dei dati oppure è vuoto
     * considerando qualsiasi valore undefined, null, nullstring
     * @param fieldName Nome del campo
     */
    propertyIsEmpty(fieldName:string): boolean {
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

    //#region CONTROLLO MODIFICHE DOCUMENTO

    /**
     * Controlla se una proprietà risulta modificata
     * @param propertyName Nome Proprietà
     */
    propertyIsModified(propertyName: string): boolean {
      let modified = false;
      let typeProp = this.getTypeReflectorByFieldName(propertyName);
      //Proprietà presente
      if (this.propertyInDoc(propertyName)&&typeProp) {
        if (typeProp.fieldType != TypeDefinition.collection) {
          modified = this._original.propertyIsModified(this, propertyName);
        }
        else {
          //E' una collection
          let arList:IDDocument[] = this[propertyName];
          for (let index = 0; index < arList.length; index++) {
            const elDoc = arList[index];
            modified = elDoc.isModified(10);
            if (modified) {
              //Se modificato esco
              break;
            }
          }
        }
      }

      return modified;
    }

    /**
     * Controlla se il documento è in stato modificato (il documento o i documenti delle sue collection)
     * @param numLivelli NumLivelli = 0 Controlla solo il documento, 1 il documento e il primo livello etc..
     */ 
    isModified(numLivelli = 0): boolean {
      let objDescriptor: Descriptor;
      let retModified = false;

      //Chiedo il descrittore dei campi
      objDescriptor = this.getDescriptor();

      if (objDescriptor) {
        //Ciclo su tutte le proprietà non di tipo collection
        for (let index = 0; index < objDescriptor.fields.length; index++) {
          const element = objDescriptor.fields[index];
          if (element.fieldType !== TypeDefinition.collection) {
            //Chiedo alla proprietà se è modificata
            retModified = this.propertyIsModified(element.fieldName);
            if (retModified) {
              //Basta che un valore sia modificato e tutto il documento 
              //è modificato
              break;
            }
          }
        }

        //Il documento nelle sue proprietà non è modificato
        if (!retModified) {
          //Devo scendere di livello e controllare se sono 
          //modificati i figli
          if (numLivelli > 0) {
            //Ciclo ancora sul descrittore
            for (let index = 0; index < objDescriptor.fields.length; index++) {
              const element = objDescriptor.fields[index];
              //Cerco le collection
              if (element.fieldType == TypeDefinition.collection) {
                //il Documento contiene questa collection ?
                if (this.propertyInDoc(element.fieldName)) {
                  if (Array.isArray(this[element.fieldName])) {
                    //Prendo l'array di elementi e ciclo alla ricerca
                    let arElements:IDDocument[] = this[element.fieldName];

                    //Ciclo sugli elementi dell'array
                    for (let index = 0; index < arElements.length; index++) {
                      const elDoc = arElements[index];
                      retModified = elDoc.isModified(numLivelli - 1);
                      if (retModified) {
                        //Ne basta uno e il documento è modificato
                        break;
                      }
                    }
                  }
                }
              }
              
              if (retModified) {
                //Ne basta uno per renderlo modificato
                break;
              }

            }
          }
        }
        
      }


      return retModified;
      

    }
    //#endregion

    //#region REPOSITORY REL DOC
    /*
    *  Con il _repositoryRelDoc si consente di includere nell'oggetto altri documenti che hanno un nesso con l'attuale
    *  Documenti arrivati da una operazione di getRelDoc ad esempio
    *  
    * addToRepositoryRelDoc(document: IDDocument) => Si aggiunge un documento al repository (se il documento per chiave primaria esiste gia aggiorna)
    * findInRepositoryRelDoc(prOrSeq: string || []) => Torna il documento del repository cercandolo per chiave primaria, oppure per sequenza campi
    * getRelDocProperty(prOrSeq: string || [], fieldName: string) => Torna il valore della proprietà richiesta del documento con primaryKey passata o sequenza campi
    */

    /**
     * Aggiunge, se non presente il documento alla repositoryRelDoc
     * @param document Documento da includere
     * @param seqFields Array con la sequenza dei campi usati per il recupero documentale
     */
    addToRepositoryRelDoc(document: IDDocument, seqFields?:string[]): void {
      let docExist: IDDocument;
      let identity = '';

      //Documento da aggiungere
      if (document) {
        //Aggiungo con una sequenza 
        if (seqFields && seqFields.length != 0) {
          identity = seqFields.toString();
        }
        else {
          //Aggiungo per primaryKey
          //Chiedo la PrimaryKey
          identity = document.getPrimaryKey();  
        }

        //Cerco se è già nel repository
        if (identity && identity.length != 0) {
          docExist = this.getDocInRepository(identity);
        }

        //Esiste lo aggiorno
        if (docExist) {
          docExist = document;
        }
        else {

          let newRep = new IDRepository();
          newRep.relDoc = document;

          if (seqFields && seqFields.length != 0) {
              newRep.seqFields = seqFields;
          }

          this._repositoryRelDoc.push(newRep);
        }
        
      }
    }

    /**
     * Cerca un documento nel repository o per sequenza di campi o per chiave primaria
     * @param pkOrSeq String PrimaryKey oppure Array con la Sequenza
     */
    getDocInRepository(pkOrSeq:any):IDDocument {

      let docReturn: IDDocument;
      let identity: string;

      if (pkOrSeq) {
        if (Array.isArray(pkOrSeq)) {
          identity = pkOrSeq.toString();
        }
        else {
          identity = pkOrSeq;
        }

        if (identity && identity.length != 0) {
          //Ricerchiamo all'interno del repository
          for (let index = 0; index < this._repositoryRelDoc.length; index++) {
            const element = this._repositoryRelDoc[index];
            
            //Documento trovato lo ritorno
            //FIXME aggiunta seconda condizione, da vedere se va tutto bnene
            if (identity == element.identifier || identity == element.relDoc.ID) {
                docReturn = element.relDoc;
                break;
            }
          }
        }

      }

      return docReturn;
    }


    /**
     * Ricerca tra i documenti nel repository, il documento con la primaryKey passata e ritorna il valore della proprietà indicata
     * @param pkOrSeq  Chiave Primaria documento oppure Array con la SeqFields esempio ['IDLOCATION','IAREA']
     * @param fieldName Nome della proprietà da decodificare
     */
    getDocPropertyInRepository(pkOrSeq: any, fieldName: string): any {
      let relDoc: IDDocument;
      let valRet: any;
      let identity = '';

      if (pkOrSeq && fieldName && fieldName.length != 0) {
        //Identita di un Documento Correlato è o la chiave primaria o la sequenza dei campi di ricerca
        if (Array.isArray(pkOrSeq)) {
          identity = pkOrSeq.toString();
        }
        else {
          identity = pkOrSeq;
        }

        //Con una identity cerco il documento
        if (identity) {
          relDoc = this.getDocInRepository(identity);

        }

        //Se è presente il documento, ricavo la proprietà
        if (relDoc) {
          let inDoc = relDoc.propertyInDoc(fieldName);

          if (inDoc) {
            valRet = relDoc[fieldName];
          }
        }
      }

      return valRet;
    }


    //#endregion

    //#region JSON MODIFICHE
    /**
     * UTILIZZATO PRIMA DELLE CREAZIONE DELLA LOGICA ORIGINAL
     * 
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

    //#region CONDITION

    /**
     * Aggiunge una condizione di filtro differente dalla semplice uguaglianza
     * @param operator    Operatore = > <
     * @param fieldName   Nome Campo
     * @param listOrValue Solo per uguaglianza è possibile indicare un array con i valori da mettere in OR
     */
    addFilterCondition(operator: OperatorCondition, fieldName: string, listOrValue?:any[]) {
      if (fieldName) {

        let objCondition = new FilterCondition(operator, fieldName, listOrValue);
        this._filterConditions.push(objCondition);
      }
    }


    /**
     * Cerca se nelle Condizioni di Filtro è presente il campo e ne ritorna l'oggetto FilterCondition
     * @param fieldName Nome del campo
     */
    getFilterConditionByFieldName(fieldName: string): FilterCondition {
      let objFilter: FilterCondition;

      //Cerchiamo nell'array delle condizioni
      objFilter = this._filterConditions.find(element => {
        return element.fieldName == fieldName;
      });

      return objFilter;
    }


    /**
     * Ritorna l'operatore della condizione di Filtro impostata nel campo
     * Di Default viene tornata sempre l'uguaglianza
     * @param fieldName Nome del campo
     */
    getFilterOperatorByFieldName(fieldName: string): OperatorCondition {
      let objFilter: FilterCondition;
      let operator: OperatorCondition = OperatorCondition.uguale;


      if (fieldName && fieldName.length !== 0) {

        //Chiedo la condizione di filtro se presente
        objFilter = this.getFilterConditionByFieldName(fieldName);
        //Se presente recupero l'operatore della condizione
        if (objFilter) {
          operator = objFilter.operator;
        }
      }
      

      return operator;
    }
    
    //#endregion

    
    //#region TAG DOCUMENTALI
    public setTagValue(key:string, value:any) {
      let idTag: IDTag;
      if (key && key.length !== 0) {
        idTag = this._findTag(key);
        if (idTag) {
          idTag.value = value;
        }
        else {
          idTag = new IDTag();
          idTag.key = key;
          idTag.value = value;
        }
      }
    }

    public getTagValue(key:string): any {
      let idTag: IDTag;
      let retValue: any;

      if (key && key.length !== 0) {
        idTag = this._findTag(key);
        if (idTag) {
          retValue = idTag.value;
        }
      }

      return retValue;
    }


    /**
     * @param key Chiave ricercata
     */
    private _findTag(key:string):IDTag {
      let idTag: IDTag;
      if (this._tags && key && key.length !== 0) {

        idTag = this._tags.find(element => {
          return element.key == key;
        });

      }
      return idTag;
    }
    //#endregion

  }

  export class ParamsExport {
    clearDOProperty: boolean; //Non esporta le proprietà do_inserted, do_deleted
    clearPKProperty: boolean; //Non esporta la chiave primaria 
    clearPrivateProperty: boolean; //Non esporta le proprietà private identificate da _ 
    onlyDocModified: boolean; //Esporta solo i documenti modificati
    onlyPropertyModified: boolean;     //Esporta solo le proprietà modificate oppure tutte
    numLivelli: number; //Numero livello di esportazione



    constructor() {
      this.numLivelli = 999;
      this.onlyPropertyModified = false;
      this.onlyDocModified = false;
      this.clearDOProperty = false;
      this.clearPKProperty = false;
      this.clearPrivateProperty = false;
    }
  }

  /**
   * Classe repository per i documenti correlati
   */
  export class IDRepository {
    
    seqFields: string[];
    relDoc: IDDocument;

    constructor() {
      this.seqFields = [];
      
    }

    /**
     * Ritorna la primary Key del documento contenuto
     */
    get primaryKey(): string {
      let propValue = '';
      if (this.relDoc) {
        propValue = this.relDoc.getPrimaryKey()
      }
      
      return propValue;
    }

    //Ritorna l'identificatore del documento
    get identifier(): string {
      let ident = '';
      //Se è presente una sequenza, l'identificatore è la sequenza
      if (this.seqFields && this.seqFields.length !== 0) {
        ident = this.seqFields.toString();
      }
      else {
        ident = this.primaryKey;
      }

      return ident;
    }
  }

  /**
   * Specifica alcune condizioni multiple
   */
  export class FieldOrCondition {
    fieldName: string;
    value: any[];
  }

  /**
   * Classe di Condizioni di filtro
   */
  export class FilterCondition {
    operator: OperatorCondition;
    fieldName: string;
    //Valori da mettere in OR (viene applicato sempre con operatore di uguaglianza)
    private _listOrValue: any[];
    
    get listOrValue(): any[] {
      return this._listOrValue;
    }

    set listOrValue(value: any[]) {
      this._listOrValue = value;
    }

    constructor(operator: OperatorCondition, fieldName: string, listOrValue: any[]) {
      this.fieldName = fieldName;
      this.operator = operator;
      this._listOrValue = [];

      //Se ho valori li imposto
      if (listOrValue) {
        this._listOrValue = listOrValue;
      }
    }


  }

  /**
   * Insieme delle Proprietà Originali di un documento
   */
  export class IDOriginal {
    private _propOriginals: IDProperty[];

    
    public get propOriginals() : IDProperty[] {
      return this._propOriginals
    }

    constructor () {
      this._propOriginals = [];
    }

    /**
     * 
     * @param name Nome Proprieta
     * @param value Valore
     */
    private setOriginalProperty(name: string, value: any): void {
      let prop: IDProperty;
      if (name) {
        prop = this.findPropertyByName(name);

        //Se non lo trovo, creo la proprieta e aggiuno
        if (!prop) {
          prop = new IDProperty();
          prop.name = name;
          this._propOriginals.push(prop);
        }

        //Modifico il valore
        prop.value = value;

      }
    }

    /**
     * Reinizializza l'array originals
     */
    private clearPropOriginal(): void {
      this._propOriginals = [];
    }

    /**
     * Cerca una proprietà per nome
     */
    private findPropertyByName(name: string): IDProperty {
      let prop: IDProperty;

      if (name) {
        prop = this._propOriginals.find(element => {
          return element.name == name;
        });
      }

      return prop;
    }

    /**
     * Controlla se una proprietà risulta modificata
     * @param propertyName Nome Proprietà
     */
    propertyIsModified(document:IDDocument, propertyName: string): boolean {
      let modified = false;
      let propOriginal: IDProperty;
      if (document && propertyName && propertyName.length != 0) {
        propOriginal = this.findPropertyByName(propertyName);
        //Se ho original posso controllare
        if (propOriginal) {
          try {
            if (document[propertyName] != propOriginal.value) {
              modified = true;
            }
          } catch (error) {
              console.error(error);
          }
        }
      }

      return modified;
    }

    /**
     * Richiesta di rendere original un documento
     * @param document Documento
     */
    public setAsOriginal(document: IDDocument): void {
      let objDescriptor: Descriptor;

      if (document) {

        this.clearPropOriginal();

        objDescriptor = document.getDescriptor();

        if (objDescriptor) {

          //Ciclo sui campi del documento
          objDescriptor.fields.forEach (elField => {
            //Se non sono collection
            if (elField.fieldType != TypeDefinition.collection) {
              //Controllo che il documento contenga la proprietà
              if (document.propertyInDoc(elField.fieldName)) {
                //Contiene la proprietà me la segno come Original
                this.setOriginalProperty(elField.fieldName, document[elField.fieldName]);
              }
              else {
                //Non la contiene metto null come original
                this.setOriginalProperty(elField.fieldName, null);
              }
            }
          });

        }

      }
    }
    
  }

  /**
   * Proprietà di un documento
   */
  export class IDProperty {
    private _name: string;
    private _value: any;

    
    public get value() : any {
      return this._value;
    }

    
    public set value(v : any) {
      this._value = v;
    }
    
    
    public get name() : string {
      return this._name;
    }

    
    public set name(v : string) {
      this._name = v;
    }
    
    
    
  }

  /**
   * Classe dei tag documentali
   */
  export class IDTag {
    key: string;
    value: any;
  }

  /**
   * Operatori delle condizioni
   */
  export enum OperatorCondition {
    uguale = '',
    minore = '<',
    maggiore = '>'
  }





  