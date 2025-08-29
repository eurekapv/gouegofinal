import { zip } from 'zip-a-folder';
import packageJson  from './package.json' with { type: 'json' };
//assert { type: "json" };
import { cp, unlink, rm, copyFile } from 'fs/promises';

/**
 * Execution with command
 * > node ZipBuild.mjs
 * Estensione mjs per utilizzare import dei moduli
 * Questa classe usata per preparare il pacchetto Web
 * Copia la cartella www in application_build/web/www
 * Sostituisce il web.config con quello corretto del server
 * Crea un file ZIP con nel nome la versione_data_ora.zip
 */
class WebDeployZIP {

    static async main() {
        let namefile = 'appgouego_' + WebDeployZIP.suffixName() + '.zip';
        
        let wwwSource = './www';
        let webFolder = './application_build/web'
        let wwwTarget = `${webFolder}/www`;
        //Il sorgente dello ZIP si trova dove ho copiato i file
        let zipSource = wwwTarget;
        let zipTarget = `./application_build/web/${namefile}`;

        

        //Inizio con la cancellazione della copia WWW presente
        console.log(`Start deletion old WWW Copy from ${wwwTarget}`);
        rm(wwwTarget, { recursive: true, force: true })
            .then(() => {
                console.log('Deletion Old copy completed');
                console.log(`Copy from ${wwwSource} to ${wwwTarget}`);
                return WebDeployZIP.copyFilesAndDirectories(wwwSource, wwwTarget);
            })
            .then(() => {
                //Copia effettuata
                console.log('Copy finished');

                // //Elimino il file web.config dalla cartella di copia
                // let pathDel = `${wwwTarget}/web.config`;
                // console.log('Deletion from copy web.config');
                // return unlink(pathDel);
                console.log('Copy web.config for server into ' + wwwTarget);
                //Copio il file web.config corretto
                return copyFile(`${webFolder}/web.config`, `${wwwTarget}/web.config`);
            })
            // .then(() => {
            //     console.log('Deletion complete');
            //     console.log('Copy Server web.config');
            //     //Copio il file web.config corretto
            //     return copyFile(`${webFolder}/web.config`, wwwTarget);

            // })
            .then(() => {
                console.log('Copy web.config completed');
                console.log('* Start creation ZIP file ' + namefile);
                return zip(zipSource, zipTarget);
            })
            .then(()=> {
                console.log('* Creation ZIP file ' + namefile + ' succesfully');
            })
            .catch(err =>  {
                console.log('Shame, occurs an error');
                console.log(err);
            })
                    
    }


    static suffixName() {
        let adesso= new Date();
        let suffix = '';
        let myVersion = '';

        myVersion = 'v' + packageJson.version;
        //myVersion = myVersion.replace('.', '.');

        suffix = myVersion;
        suffix += '_';
        suffix += WebDeployZIP.fillLeft(adesso.getFullYear());
        suffix += WebDeployZIP.fillLeft(adesso.getMonth() + 1);
        suffix += WebDeployZIP.fillLeft(adesso.getDate());
        suffix += '_';
        suffix += WebDeployZIP.fillLeft(adesso.getHours());
        suffix += WebDeployZIP.fillLeft(adesso.getMinutes());
        suffix += WebDeployZIP.fillLeft(adesso.getSeconds());

        return suffix;
    }

    /**
     * @returns {string}
     * @param {number} value 
     */
    static fillLeft(value) {
        let strValue = '';
        if (value < 10) {
            strValue = '0' + value;
        }
        else {
            strValue = '' + value;
        }

        return strValue;
    }


    /**
     * Cpoia la sorgente nella destination
     * @param {string} sourceDir 
     * @param {string} destinationDir 
     */
    static async copyFilesAndDirectories(sourceDir, destinationDir) {
        try {
          // Copy a directory recursively
          await cp(sourceDir, destinationDir, { recursive: true });
          console.log(`${sourceDir} was copied to ${destinationDir}`);
        } catch (err) {
          console.error('Error:', err.message);
        }
      }
}

//Eseguo il comando
WebDeployZIP.main();