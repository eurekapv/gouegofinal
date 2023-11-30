export class ErrorDoc {
    ErrorMessage: string;
    PropertyName: string;

    constructor() {
        this.ErrorMessage = '';
        this.PropertyName = '';
    }

    /**
     * Compone il record per una visualizzazione
     * @returns 
     */
    display(): string {
        let retValue: string = '';

        retValue = `${this.PropertyName}: ${this.ErrorMessage}`;

        return retValue;
    }


    /**
     * Imposta i campi con i dati passati
     * @param data 
     */
    setPropertFromJson(data: any) {
        if (data) {
            let arKeys = Object.keys(data);

            arKeys.forEach(elNameProp => {
                if (this.hasOwnProperty(elNameProp)) {
                    this[elNameProp] = data[elNameProp];
                }
            })
        }   
    }

    /**
     * Converte in un Array ErrorDoc una lista Data generica
     * @param listData 
     */
    static convertListFrom(listData: any[]) : ErrorDoc[] {
        let listReturn: ErrorDoc[] = [];

        if (listData) {
            listData.forEach(elData => {
                let myErr: ErrorDoc = new ErrorDoc();
                myErr.setPropertFromJson(elData);
                listReturn.push(myErr);
            })
        }

        return listReturn;
    }
}