import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LogApp } from '../../models/zsupport/log.model';
import { FileOpener } from '@capacitor-community/file-opener';
import { File } from '@awesome-cordova-plugins/file';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../../models/start-configuration.model';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private platform: Platform,
    private apiCallService: ApicallService
  ) { }

  /**
   * Effettua l'apetura del file in versione Desktop
   * @param blob 
   */
  openDesktop(blob: Blob): void {


    //per scaricare il file creo via javascript un link fittizio agganciando il percorso del blob, e ne scateno l'evento click
    let name='File'
    let url  = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  }

  /**
   * Effettua l'apertura del Blob in modalità Nativa sul dispositivo
   * @param blob 
   */
  openMobile(blob: Blob): void {

    let fileName='Documento';         
    let filePath= File.cacheDirectory;      
    

    File.writeFile(filePath, fileName, blob, {replace: true}).then((fileEntry) => {

    //Utilizzo il nuovo File Opener per aprire i file
    FileOpener.open({filePath: fileEntry.toURL(), contentType: blob.type})
              .then(() => LogApp.consoleLog('File is opened'))
              .catch(err => LogApp.consoleLog('Error openening file: ' + err,'error'));
  })
  .catch((err) => {

      LogApp.consoleLog("Error creating file: ",'error');
      LogApp.consoleLog(err,'error');
      
      throw err;  
  });

  }


  /**
   * scarica e visualizza un blob da mobile o desktop
   */
  open(blob: Blob){
    if (blob){

      if(this.platform.is("hybrid")){
        this.openMobile(blob);
      }
      else{
        this.openDesktop(blob);
      }
    }
    else{
      LogApp.consoleLog('Blob inesistente','error');
      throw new Error();
    }
  }


  /**
   * Effettua una pulitura del solo nome file in arrivo, per essere richiesto via URL
   * @param fileUrl 
   */
  encodeFilename(fileUrl:string): string {
      let nameFile = '';
      let prefixPath = '';
      let idxPos = -1;
  
      if(fileUrl && fileUrl.length != 0) {
        idxPos = fileUrl.lastIndexOf('/');
        if (idxPos != -1) {
          nameFile = fileUrl.substring(idxPos + 1);
          prefixPath = fileUrl.substring(0, idxPos + 1);
        }
        else {
          nameFile = fileUrl;
        }
  
        nameFile = encodeURIComponent(nameFile);
        fileUrl = prefixPath + nameFile;
      }
  
      return fileUrl;
  }

  /**
   * Effettua lo Scaricamento di un Blob da un URL
   * @param config Dati Configurazione
   * @param fileUrl Url da richiamare
   * @returns 
   */
  downloadFile(config: StartConfiguration, fileUrl: string):Promise<Blob> {

    return new Promise<Blob>((resolve, reject) => {

      //Per ora non dichiaro un tipo (funziona lo stesso)
      //new HttpHeaders({'Content-type':'text/plain'});    
      let myHeaders;

      LogApp.consoleLog(`Richiesta del file ${fileUrl}`);
      fileUrl = this.encodeFilename(fileUrl);
          
      let myUrl = config.urlFileServer + '/' + fileUrl;
          
      this.apiCallService
            .httpGetFile (myUrl, myHeaders)
            .subscribe({
              next: (elBlobFile) => {
                resolve(elBlobFile);                
              },
              error: (error) => {
                reject(error);
              }

            })
            
    })

  }  


}
