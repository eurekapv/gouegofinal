import { lstatSync, existsSync, copyFileSync, constants } from 'fs';

/*
Prima di eseguire qualsiasi Deploy utilizzare questa classe per copiare correttamente i 
file relativi alle società sportive
Comando:
> node preparebuild.mjs --customer <societyname>
Dove <societyname> sarà:
openbeach
beachforfun
progettorieduca
*/

class PrepareBuild {

    constructor() {
        this._basePathModel = './application_model';
        this._baseCustomer = '';
        this._workPathModel = '';
        //Questi sono i file da copiare da basePathModel
        this._filesName = ['capacitor.config.ts', 'environment.prod.ts'];
        //Questi sono i path dove copiarli
        this._filesFolderTarget = ['.', './src/environments'];
    }

    
    get basePathModel() {
        return this._basePathModel;
    }
    set basePathModel(value) {
        this._basePathModel = value;
    }

    
    get baseCustomer() {
        return this._baseCustomer;
    }
    set baseCustomer(value) {
        this._baseCustomer = value;
        this._workPathModel = `${this._basePathModel}/${this._baseCustomer}`;
    }

    get workPathModel() {
        return this._workPathModel;
    }
    set workPathModel(value) {
        this._workPathModel = value;
    }

    //Il metodo 
    async main() {

        console.log('Start Preparing Build Mobile');

        this.argsDecoder()
            .then(result => {
                console.log('Check Arguments: PASSED');
                //Ora valido il cliente
                return this.validateCustomer();
            })
            .then(result => {
                console.log(`Customer Validation <${this._baseCustomer}>: PASSED`);
                return this.validateFiles();
            })
            .then(result => {
                console.log(`Files Validation <${this._baseCustomer}>: PASSED`);
                console.log(`Start Copy files from ${this._workPathModel}`);
                return this.copyWorkFiles();
            })
            .then(result => {
                console.log(`Copy Files from ${this._baseCustomer}: PASSED`);
                console.log('Now you can use command to build and sync application');
                console.log('Preparing Build Mobile completed');
                console.log('');
                console.log('***** NEXT COMMAND ******');
                console.log('> npm run buildprod');
                console.log('> npm run to<PLATFORM>');
                console.log('> npm run op<PLATFORM>');
            })
            .catch(error => {
                console.log(error);
                console.log('Error Preparing Build Mobile');
            })
            

        
    }

    /**
     * Decodifica gli argomenti 
     */
    argsDecoder() {
        return new Promise((resolve, reject) => {
            let args = process.argv;
            let flagResult = false;
                    
            if (args && Array.isArray(args)) {
                if (args.length != 0) {
    
                    for (let index = 0; index < args.length; index++) {
                        const element = args[index];
                        if (element == '--customer') {
                            if (index + 1 < args.length) {
                                this._baseCustomer = args[ index + 1];
                            }
                        }
                    }
                }
            }
    
            if (this._baseCustomer.length != 0) {
                this._workPathModel = `${this._basePathModel}/${this._baseCustomer}`;
                resolve(true);
            }
            else {
                reject('Check Syntax command: node preparebuild --customer <customerfolder>');
            }
    
            return flagResult;            
        })

    }

    /**
     * Effettua un controllo che il customer impostato sia valido
     */
    validateCustomer() {
        return new Promise((resolve, reject) => {
            
            if (lstatSync(this._workPathModel).isDirectory()) {
                resolve(true);
            }
            else {
                reject(`No directory Model found for ${this._baseCustomer}`)
            }
        })

    }

    /**
     * Controlla della presenza corretta dei file richiesti nella cartella
     */
    validateFiles() {
        return new Promise((resolve, reject) => {
            
            let numExist = 0;
            
            this._filesName.forEach(item => {
                let pathFull = `${this._workPathModel}/${item}`
                if (existsSync(pathFull)) {
                    numExist++;
                }
            })

            if (numExist == this._filesName.length) {
                resolve(true)
            }
            else {
                reject(`Unable to find files in a folder ${this._workPathModel}`);
            }
        })
    }


    /**
     * Effettua la copia dei file richiesti
     */
    copyWorkFiles() {
        return new Promise((resolve, reject) => {

            //Ciclo sui file da copiare e li sposto
            for (let index = 0; index < this._filesName.length; index++) {
                const itemFile = this._filesName[index];
                const targetFile = `${this._filesFolderTarget[index]}/${itemFile}`;
                const sourceFile = `${this._workPathModel}/${itemFile}`;

                try {
                    copyFileSync(sourceFile, targetFile, constants.COPYFILE_FICLONE);
                } catch (error) {
                    reject(error)
                }
            }

            resolve(true);

        })
    }
}

let objPrepare = new PrepareBuild();
objPrepare.main();
