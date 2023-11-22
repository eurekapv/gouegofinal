import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LogApp } from '../../models/log.model';

import { CustomEncriptionService } from './custom-encription.service';
import { CustomHttpParamEncoder } from '../../library/models/custom-http-params-encoder.model';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(
    private httpClient: HttpClient,
    private customEncriptionService: CustomEncriptionService
    ) { }


    /**
     * Ritorna un documento VUOTO da popolare con i parametri
     * Ritorno un documento con un Encoder Specifico 
     */
    getHttpParams(): HttpParams {

      return new HttpParams({ encoder: new CustomHttpParamEncoder() })

    }
  
  /**
   * Effettua una chiamata GET verso un server e ritorna un Observable
   * @param url Url da contattare
   * @param header Dati di Testata
   * @param params Parametri di Testata
   */
  httpGet(url: string, header: HttpHeaders, params?: HttpParams) {
    return this._httpGet(url, header, params)
  }

  /**
   * Effettua una chiamata POST verso un server e ritorna un Observable
   * Utilizzata per Inserimento di Risorse
   * @param url Url da contattare
   * @param header Dati di Testata
   * @param params Parametri
   * @param body Body
   */
  httpPost(url: string, 
            header: HttpHeaders, 
            params: HttpParams, 
            body: any
            ) {
    return this._httpPost(url, header, params, body);
  }


  /**
   * Effettua una chiamata PUT verso un server e ritorna un Observable
   * Utilizzata per Modifica di Risorse
   * @param url Url da contattare
   * @param header Dati di Testata
   * @param body Body
   */
  httpPut(url: string, 
            header: HttpHeaders,
            params: HttpParams,
            body: any) {
    return this._httpPut(url, header, params,body);
  }

    /**
   * Esegue una chiamata GET al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   */
  private _httpGet(url: string, reqHeaders: HttpHeaders, reqParams?: HttpParams) {

    LogApp.consoleLog('Chiamata GET a ' + url);
        
    reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());
    //ritorno la get controllando l'errore
    return this.httpClient.get<any>(url, {
      headers: reqHeaders,
      params: reqParams,
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Esegue una chiamata POST al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   * @param reqBody    Body
   */
  private _httpPost(url: string, 
                    reqHeaders: HttpHeaders, 
                    reqParams: HttpParams, 
                    reqBody: any
                    ):Observable<any> {

    reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());
    LogApp.consoleLog('Chiamata POST a ' + url);

    return this.httpClient.post<any>(url, reqBody, {
                                        headers: reqHeaders,
                                        params: reqParams
                                })
                          .pipe(
                            catchError(this.handleError)
                          );

  }

  /**
   * Esegue una chiamata PUT al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   * @param reqBody    Body
   */
  private _httpPut(url: string, 
                   reqHeaders: HttpHeaders,
                   reqParams: HttpParams,
                   reqBody: any) {
    
    LogApp.consoleLog('Chiamata PUT a ' + url);

    reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());

    return this.httpClient.put(url, reqBody, {
                                        headers: reqHeaders,
                                        params: reqParams,
                                        observe: 'response'
                              })
                              .pipe(
                                catchError(this.handleError)
                              );
  }


  /**
   * Gestisco l'errore arrivato
   * @param receivingError 
   * @returns 
   */
  private handleError(receivingError: HttpErrorResponse) {
    
    let errMsg = '';

    if (receivingError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errMsg = `Errore di chiamata: ${receivingError.error.message}`;
      LogApp.consoleLog('Errore di chiamata:' + receivingError.error.message,'error');
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errMsg = `Errore BackEnd\nCodice Errore: ${receivingError.status}\n${receivingError.message}`;
      if (typeof receivingError.error == 'string') {
        errMsg += '\n';
        errMsg += receivingError.error;
      }
      else if (typeof receivingError.error == 'object') {
        errMsg += '\n';
        errMsg += JSON.stringify(receivingError.error);
      }
      
      LogApp.consoleLog(receivingError,'error');

    }

    return throwError(() => new Error(errMsg));
    
  };


    /**
   * Esegue una chiamata GET al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   */
  httpGetFile(url: string, reqHeaders: HttpHeaders) {
    LogApp.consoleLog('Chiamata GET a ' + url);
    
    
    //ritorno la get controllando l'errore
    return this.httpClient.get(url, {
     headers: reqHeaders,
     responseType: 'blob'
    })
    .pipe(
      catchError(this.handleError)
    );
  }


}
