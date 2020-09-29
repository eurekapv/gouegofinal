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

        let myHeaders;
        //Per ora non dichiaro un tipo (funziona lo stesso)
        //new HttpHeaders({'Content-type':'text/plain'});    
        
    
        let myUrl = config.urlFileServer + '/' + fileUrl;
        
        return this.apiCallService
          .httpGetFile (myUrl, myHeaders)
          .toPromise<Blob>();

  }

}
