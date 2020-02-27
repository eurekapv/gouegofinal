import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LogApp } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }

  
  /**
   * Effettua una chiamata GET verso un server e ritorna un Observable
   * @param url Url da contattare
   * @param header Dati di Testata
   * @param params Parametri di Testata
   */
  httpGet(url: string, header: HttpHeaders, params: HttpParams) {
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
            body: any) {
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
            
            body: any) {
    return this._httpPut(url, header, body);
  }

    /**
   * Esegue una chiamata GET al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   */
  private _httpGet(url: string, reqHeaders: HttpHeaders, reqParams: HttpParams) {
    LogApp.consoleLog('Chiamata GET a ' + url);
    
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
                    reqBody: any) {
    LogApp.consoleLog('Chiamata POST a ' + url);

    return this.httpClient.post(url, reqBody, {
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
                   reqBody: any) {
    
    LogApp.consoleLog('Chiamata PUT a ' + url);

    return this.httpClient.put(url, reqBody, {
                                        headers: reqHeaders,
                                        observe: 'response'
                              })
                              .pipe(
                                catchError(this.handleError)
                              );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Errore di chiamata:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Errore Backend Codice ${error.status}, ` +
        `Body: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Si sono verificati errori. Riprovare.');
  };
}
