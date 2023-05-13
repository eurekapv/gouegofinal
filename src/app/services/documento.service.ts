import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StartConfiguration } from '../models/start-configuration.model';
import { ApicallService } from './apicall.service';


@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(
    private apiCallService: ApicallService
  ) { }


  request(config: StartConfiguration, fileUrl: string) {

    console.log(fileUrl);
        let myHeaders;
        //Per ora non dichiaro un tipo (funziona lo stesso)
        //new HttpHeaders({'Content-type':'text/plain'});    
        fileUrl = this.encodeFilename(fileUrl);
        
    
        let myUrl = config.urlFileServer + '/' + fileUrl;
        
        return this.apiCallService
          .httpGetFile (myUrl, myHeaders)
          .toPromise<Blob>();

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
