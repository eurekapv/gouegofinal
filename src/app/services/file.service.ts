import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { LogApp } from '../models/log.model';
import { FileOpener } from '@capacitor-community/file-opener';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private file: File,
    private platform: Platform
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
    let filePath= this.file.cacheDirectory;      
    

  this.file.writeFile(filePath, fileName, blob, { replace:true }).then((fileEntry) => {

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

  //#region OLD VERSION
  openMobile_Old(blob: Blob){
    
    // let fileName='Documento';         
    // let filePath= this.file.cacheDirectory;      
    

    //     this.file.writeFile(filePath, fileName, blob, { replace:true }).then((fileEntry) => {

                   
    //       this.OldfileOpener.open(fileEntry.toURL(), blob.type)
    //         .then(() => LogApp.consoleLog('File is opened'))
    //         .catch(err => LogApp.consoleLog('Error openening file: ' + err,'error'));
    //     })
    //       .catch((err) => {
    //         LogApp.consoleLog("Error creating file: ",'error');
    //         LogApp.consoleLog(err,'error');
            
    //         throw err;  
    //       });
  }
  //#endregion


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




}
