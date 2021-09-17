import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';


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
            .then(() => console.log('File is opened'))
            .catch(err => console.error('Error openening file: ' + err));
        })
          .catch((err) => {
            console.error("Error creating file: ");
            console.log(err);
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
      console.log('Blob inesistente');
      throw new Error();
    }
  }




}
