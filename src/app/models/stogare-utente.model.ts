export class StorageUtente {
    userLogin: string;
    userPassword: string;
    crypted: boolean;

    constructor() {
        this.crypted = false;
    }

    /**
     * Imposta le credenziali dentro all'oggetto
     * Non passare valori Criptati ma solo il FLAG che indica come dovranno essere trattati in seguito
     * cryptedMode = TRUE => Verranno criptati in fase di salvataggio
     * @param user 
     * @param pwd 
     * @param cryptedMode 
     */
    setCredential(user: string,pwd: string,cryptedMode: boolean) {
        this.userLogin = user;
        this.userPassword = pwd;
        this.crypted = cryptedMode;
    }

    /**
     * 
     * @returns TRUE se i campi userLogin e userPassword sono compilati
     */
    containCredentials(): boolean {
        let flagExist = false;

        if (this.userLogin && this.userLogin.length != 0 &&
            this.userPassword && this.userPassword.length != 0) {
                flagExist = true;
            }
            
        return flagExist;
    }

    /**
     * Imposta il documento con una stringa da parse
     * @param value 
     */
    setFromObjString(value: string) {
        let objData = {};
        let nameProp = '';

        if (value && value.length != 0) {
            try {
                objData = JSON.parse(value);
                if (objData) {

                    nameProp = 'userLogin';
                    if (objData.hasOwnProperty(nameProp)) {
                        this.userLogin = objData[nameProp];
                    }

                    nameProp = 'userPassword';
                    if (objData.hasOwnProperty(nameProp)) {
                        this.userPassword = objData[nameProp];
                    }

                    nameProp = 'crypted';
                    if (objData.hasOwnProperty(nameProp)) {
                        this.crypted = objData[nameProp];
                    }
                }
            } catch (error) {
                
            }
        }
    }

}