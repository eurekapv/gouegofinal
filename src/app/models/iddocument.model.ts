 
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


  
    newID() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  
  
    // Imposta le proprietà basiche dell'oggetto via JSON
    setJSONProperty(dataObject: any) {
      let _this = this;
      let arProperty = Object.keys(dataObject);
  
      // Gli elementi di tipo Array non li copio
      arProperty.forEach(element => {
          if (Array.isArray(dataObject[element]) == false) {
            _this[element] = dataObject[element];
          }
          else {
            console.log('Array ' + element);
          }

      });

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



  }
  