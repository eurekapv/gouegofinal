import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { LogApp } from '../models/log.model';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform
  ) { }

  openDesktop(blob: Blob){


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

  openMobile(blob: Blob){
    let fileName='Documento';         
    let filePath= this.file.cacheDirectory;      
    

        this.file.writeFile(filePath, fileName, blob, { replace:true }).then((fileEntry) => {

                   
          this.fileOpener.open(fileEntry.toURL(), blob.type)
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




}
