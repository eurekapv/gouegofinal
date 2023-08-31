import { Injectable } from '@angular/core';
import { StartConfiguration } from '../models/start-configuration.model';
import { ApicallService } from './apicall.service';
import { LogApp } from '../models/log.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(
    private apiCallService: ApicallService
  ) { }


  request(config: StartConfiguration, fileUrl: string):Promise<Blob> {

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
            // .subscribe(elBlobFile => {
            //   resolve(elBlobFile);
            // }, error => {
            //   reject(error);
            // })
            
    })

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

}
