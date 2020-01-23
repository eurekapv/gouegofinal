  
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
  
  
    // Imposta le proprietà dell'oggetto via JSON
    setJSONProperty(dataObject: any) {
      let _this = this;
      let arProperty = Object.keys(dataObject);
  
      arProperty.forEach(element => {
        _this[element] = dataObject[element];
      });
  
  
    }
  }
  