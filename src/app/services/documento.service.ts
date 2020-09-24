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

        let myHeaders
        //myHeaders = config.getHttpHeaders();
        //new HttpHeaders({'Content-type':'text/plain'});    
        // Nei parametri imposto il gruppo Sportivo
    
        let myUrl = config.urlFileServer + '/' + fileUrl;
        console.log(myUrl);
        return this.apiCallService
          .httpGetFile (myUrl, myHeaders)
          .toPromise<Blob>();

  }

}
