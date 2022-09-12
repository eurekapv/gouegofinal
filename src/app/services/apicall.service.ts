import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LogApp } from '../models/log.model';

import { CustomEncriptionService } from './custom-encription.service';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(
    private httpClient: HttpClient,
    private customEncriptionService: CustomEncriptionService
    ) { }

  
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
      params: reqParams
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
                    ) {

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


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      LogApp.consoleLog('Errore di chiamata:' + error.error.message,'error');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      LogApp.consoleLog(
        `Errore Backend Codice ${error.status}, ` +
        `Body: ${error.error}`,
        'error'

      );

        LogApp.consoleLog(error.message,'error');
        LogApp.consoleLog(JSON.stringify(error),'error');
    }
    // return an observable with a user-facing error message
    return throwError(
      'Si sono verificati errori. Riprovare.');
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
