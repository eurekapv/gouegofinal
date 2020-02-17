export enum TypeDefinition {
  char = 'String',
  date = 'Date',
  dateTime = 'DateTime',
  time = 'Time',
  number = 'Number',
  boolean = 'boolean',
  collection = 'collection'
}
 
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
  
  
    // Imposta le proprietà basiche dell'oggetto via JSON
    setJSONProperty(dataObject: any) {
      let _this = this;
      let arProperty = Object.keys(dataObject);
      let fakeDate = new Date();
  
      // Gli elementi di tipo Array non li copio
      arProperty.forEach(element => {
          if (Array.isArray(dataObject[element]) == false) {

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

    describerType(fieldName): TypeDefinition {
      let retType = TypeDefinition.char;

      return retType

  } 

    /**
     * Vorrei riuscire a capire il tipo dell'elemento presente nel JSON
     * @param nameElement Nome dell'Elemento
     * @param value Valore Elemento
     */
    jsonDefineType(obj: IDDocument, nameElement: string, value: any): TypeDefinition {
      let typeData: TypeDefinition;

      typeData = obj.describerType(nameElement);

      return typeData;
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



 
  